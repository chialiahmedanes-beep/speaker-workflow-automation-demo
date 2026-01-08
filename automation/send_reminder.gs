/**
 * Checks for speakers who have not confirmed
 * and sends a reminder email after a defined number of days
 */
function sendPendingConfirmationReminders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  // Column assumptions for demo
  const STATUS_COL = 6;
  const INVITATION_SENT_AT_COL = 8;
  const SPEAKER_NAME_COL = 1;
  const SPEAKER_EMAIL_COL = 2;
  const EVENT_NAME_COL = 3;

  const REMINDER_AFTER_DAYS = 7;
  const today = new Date();

  for (let i = 1; i < data.length; i++) {
    const status = data[i][STATUS_COL - 1];
    const invitationSentAt = data[i][INVITATION_SENT_AT_COL - 1];

    if (status === 'Sent' && invitationSentAt) {
      const daysSinceInvite =
        (today - new Date(invitationSentAt)) / (1000 * 60 * 60 * 24);

      if (daysSinceInvite >= REMINDER_AFTER_DAYS) {
        const speakerName = data[i][SPEAKER_NAME_COL - 1];
        const speakerEmail = data[i][SPEAKER_EMAIL_COL - 1];
        const eventName = data[i][EVENT_NAME_COL - 1];

        MailApp.sendEmail(
          speakerEmail,
          `Reminder: Invitation to ${eventName}`,
          `Hi ${speakerName},

Just a quick reminder regarding our invitation to speak at ${eventName}.
Please let us know if you are interested.

Kind regards,
Event Team`
        );
      }
    }
  }
}
