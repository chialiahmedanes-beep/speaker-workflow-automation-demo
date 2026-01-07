# Demo Spreadsheet Structure

Each speaker is represented by **one row** in the spreadsheet.
The spreadsheet acts as the **control center** for the automation.

---

## Required Columns (Demo)

| Column Name | Description |
|------------|-------------|
| Speaker Name | Full name of the speaker |
| Speaker Email | Email address used for all communication |
| Event Name | Name of the event |
| Event Date | Date of the event |
| Language | EN (HU can be added later) |
| Current Step | Workflow step (e.g. 1, 2) |
| Status | Controls automation (Not started, Sent, Confirmed) |
| Invitation Sent At | Timestamp (auto-filled) |
| Calendar Event ID | Google Calendar event reference |
| Notes | Free text |

---

## Workflow Logic (Demo)

### Step 1 – Invitation
- `Current Step = 1`
- `Status = Not started`

**Automation action:**
- Send invitation email
- Log timestamp
- Update `Status` to `Sent`

---

### Step 2 – Welcome Information
- `Current Step = 2`
- `Status = Confirmed`

**Automation action:**
- Send welcome information email
- Create all-day calendar invitation
- Save Calendar Event ID

---

## Reminder Logic

If:
- `Status = Sent`
- No confirmation after X days

**Automation action:**
- Send reminder email
