import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

type AdditionalGuest = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, address, guests } = data;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Format additional guests into a readable string for the sheet
    const additionalGuests: AdditionalGuest[] = Array.isArray(guests)
      ? guests
      : [];
    const guestsFormatted = additionalGuests
      .map((g) => {
        const contact = [g.email, g.phone].filter(Boolean).join(" / ");
        return contact
          ? `${g.firstName} ${g.lastName} (${contact})`
          : `${g.firstName} ${g.lastName}`;
      })
      .join("; ");

    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountJson || !sheetId) {
      console.warn("Google Sheets not configured — RSVP received but not saved:", {
        firstName,
        lastName,
        email,
        address,
        guests: guestsFormatted,
      });
      return NextResponse.json({ success: true });
    }

    const credentials = JSON.parse(serviceAccountJson);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            firstName,
            lastName,
            email,
            address ?? "",
            additionalGuests.length,
            guestsFormatted,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("RSVP submission error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
