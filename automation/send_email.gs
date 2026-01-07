/**
 * Sends the invitation email to the speaker
 * Uses a simple template-based approach
 */
function sendInvitationEmail(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Column assumptions for demo
  const SPEAKER_NAME_COL = 1;
  const SPEAKER_EMAIL_COL = 2;
  const EVENT_NAME_COL = 3;
  const EVENT_DATE_COL = 4;

  const speakerName = sheet.getRange(row, SPEAKER_NAME_COL).getValue();
  const speakerEmail = sheet.getRange(row, SPEAKER_EMAIL_COL).getValue();
  const eventName = sheet.getRange(row, EVENT_NAME_COL).getValue();
  const eventDate = sheet.getRange(row, EVENT_DATE_COL).getValue();

  const subject = `Invitation to Speak at ${eventName}`;

  const body = `
Hi ${speakerName},

We would like to invite you to speak at ${eventName}, taking place on ${eventDate}.

Please let us know if you are interested.

Kind regards,
Event Team
`;

  MailApp.sendEmail(speakerEmail, subject, body);
}

/**
 * Sends the welcome information email after confirmation
 */
function sendWelcomeEmail(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const SPEAKER_NAME_COL = 1;
  const SPEAKER_EMAIL_COL = 2;
  const EVENT_NAME_COL = 3;

  const speakerName = sheet.getRange(row, SPEAKER_NAME_COL).getValue();
  const speakerEmail = sheet.getRange(row, SPEAKER_EMAIL_COL).getValue();
  const eventName = sheet.getRange(row, EVENT_NAME_COL).getValue();

  const subject = `Welcome – ${eventName}`;

  const body = `
Hi ${speakerName},

Thank you for confirming your participation in ${eventName}.

We will now share all practical information and next steps with you.

Kind regards,
Event Team
`;

  MailApp.sendEmail(speakerEmail, subject, body);
}
