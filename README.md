# Angie & Alex — Wedding Website

A simple, elegant wedding website built with Next.js (App Router) and Tailwind CSS. Guests RSVP via a form; submissions are written as rows to a Google Sheet.

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero and RSVP button |
| `/rsvp` | RSVP form |
| `/thank-you` | Confirmation page after submission |
| `/api/rsvp` | POST endpoint — appends row to Google Sheet |

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}
GOOGLE_SHEET_ID=your-google-sheet-id
```

> **Tip:** Both variables are optional during development. If either is missing, RSVPs are logged to the console instead of being saved to the sheet.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Google Sheets Setup

Each RSVP submission appends one row to `Sheet1` with these columns:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Attendance | First Name | Last Name | Email | Address | Guest Count | Additional Guests |

### Step 1 — Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new blank sheet.
2. In row 1, add the header labels above (optional but recommended).
3. Copy the **Sheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit
   ```

### Step 2 — Create a Google Cloud service account

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or select an existing one).
3. Enable the **Google Sheets API**: navigate to **APIs & Services → Library**, search for "Google Sheets API", and click **Enable**.
4. Navigate to **IAM & Admin → Service Accounts** and click **Create Service Account**.
5. Give it a name (e.g. `wedding-rsvp`), click **Done** — no extra roles needed.
6. Click the new service account, go to **Keys → Add Key → Create new key → JSON**, and download the file.

### Step 3 — Share the sheet with the service account

1. Open the JSON key file and copy the `client_email` value (looks like `wedding-rsvp@your-project.iam.gserviceaccount.com`).
2. Open your Google Sheet, click **Share**, paste that email, and set the role to **Editor**.

### Step 4 — Set the environment variables

Minify the JSON key onto a single line and set it as `GOOGLE_SERVICE_ACCOUNT_JSON`:

```bash
# macOS — minifies the key and copies it to your clipboard
cat path/to/key.json | jq -c . | pbcopy
```

Paste the result (no newlines) as the value in `.env.local`:

```
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account","project_id":"..."}
GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms
```

Restart the dev server after editing `.env.local`.

---

## Deployment (Vercel)

1. Push the branch to GitHub and import the repo in [Vercel](https://vercel.com/).
2. In the Vercel project, go to **Settings → Environment Variables** and add:
   - `GOOGLE_SERVICE_ACCOUNT_JSON` — the minified JSON string from Step 4
   - `GOOGLE_SHEET_ID` — the Sheet ID from Step 1
3. Redeploy for the variables to take effect.

```bash
npm run build   # verify the build passes locally before deploying
```
