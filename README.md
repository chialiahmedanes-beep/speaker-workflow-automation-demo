# Speaker Workflow Automation – Demo

This repository demonstrates how a speaker management workflow
can be automated using a spreadsheet-driven approach.

The demo is based on a real-life event workflow involving
multiple speakers, recurring events, and template-based communication.

---

## Problem

The current process is managed manually in Excel and involves:
- Sending and updating many emails
- Creating and updating calendar invitations
- Following up with speakers across multiple steps

This creates high administrative overhead and risk of human error.

---

## Demo Scope

This demo automates the following steps for **one speaker**:

1. Step 1 – Invitation email
2. Step 2 – Welcome information email
3. Automatic all-day calendar invitation
4. Reminder email if no response is received

The same logic can be extended to cover the full speaker workflow
(steps 0–6) and multiple events per year.

---

## How It Works (High Level)

- Each speaker is represented by one row in a spreadsheet
- The workflow is controlled by two fields:
  - `Current Step`
  - `Status`
- When these values change, automation triggers:
  - Email sending
  - Calendar event creation
  - Reminder scheduling

---

## Technology (Demo)

- Google Sheets (as workflow control center)
- Google Apps Script (automation logic)
- Gmail & Google Calendar integration

---

## Repository Structure



---

## Disclaimer

This repository is a **demonstration project** created for showcasing
automation logic and workflow design. It does not contain production
credentials or real personal data.
