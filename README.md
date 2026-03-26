# Angie & Alex — Wedding Website

A simple, elegant wedding website built with Next.js (App Router) and Tailwind CSS. Guests can RSVP via a secret URL code; submissions are written to a Google Sheet.

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, couple details, and optional RSVP button |
| `/rsvp?code=<CODE>` | RSVP form (redirects to `/` if code is invalid) |
| `/thank-you` | Confirmation page after submission |
| `/api/rsvp` | POST endpoint — appends row to Google Sheet |

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.local` (already created) and fill in the values:

```
NEXT_PUBLIC_RSVP_CODE=your-secret-rsvp-code
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}
GOOGLE_SHEET_ID=your-google-sheet-id
```

> **Tip:** The site works without the Google Sheets variables during development — RSVPs are logged to the console instead of being saved.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To test the RSVP flow, visit [http://localhost:3000?code=your-secret-rsvp-code](http://localhost:3000?code=your-secret-rsvp-code).

---

## Google Sheets Setup

### Step 1 — Create a Google Sheet

1. Create a new Google Sheet.
2. Add a header row in `Sheet1`:

   | A | B | C | D | E | F | G |
   |---|---|---|---|---|---|---|
   | Timestamp | First Name | Last Name | Email | Attending | Guest Name | Guest Email |

3. Copy the Sheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit`

### Step 2 — Create a Google Cloud project & service account

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or use an existing one).
3. Enable the **Google Sheets API** for the project.
4. Navigate to **IAM & Admin → Service Accounts** and create a new service account.
5. Grant it the **Editor** role (or a custom role with Sheets write access).
6. Under the service account, go to **Keys → Add Key → Create new key → JSON**.
7. Download the JSON key file.

### Step 3 — Share your sheet with the service account

1. Open your Google Sheet.
2. Click **Share** and add the service account's email (e.g. `my-sa@my-project.iam.gserviceaccount.com`) as an **Editor**.

### Step 4 — Set the environment variables

Stringify the downloaded JSON key (remove all newlines) and set it as `GOOGLE_SERVICE_ACCOUNT_JSON`:

```bash
# On macOS/Linux — copies the minified JSON to your clipboard
cat path/to/key.json | jq -c . | pbcopy
```

Paste the result as the value of `GOOGLE_SERVICE_ACCOUNT_JSON` in `.env.local`.

Set `GOOGLE_SHEET_ID` to the Sheet ID from Step 1.

---

## Customising Placeholder Content

Search the codebase for `[` to find all placeholder values:

- Couple names: `app/layout.tsx`, `app/page.tsx`
- Wedding date: `app/layout.tsx`, `app/page.tsx`
- Venue & city: `app/page.tsx`
- Hero image: `app/page.tsx` — replace the `<img src="https://placehold.co/...">` with a real image

---

## Deployment

Deploy to [Vercel](https://vercel.com/) with one click. Add the three environment variables in the Vercel project settings under **Settings → Environment Variables**.

```bash
npm run build   # verify build locally first
```
