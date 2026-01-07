/**
 * Triggered when a speaker's status changes in the spreadsheet
 * This function decides what automation should run next.
 */
function onStatusChange(e) {
  const sheet = e.source.getActiveSheet();
  const row = e.range.getRow();
  const column = e.range.getColumn();

  // Assumption for demo:
  // Status column = column 6
  const STATUS_COLUMN = 6;
  const STEP_COLUMN = 5;

  if (column !== STATUS_COLUMN) return;

  const currentStep = sheet.getRange(row, STEP_COLUMN).getValue();
  const status = sheet.getRange(row, STATUS_COLUMN).getValue();

  // STEP 1 – Invitation
  if (currentStep === 1 && status === 'Not started') {
    sendInvitationEmail(row);
    sheet.getRange(row, STATUS_COLUMN).setValue('Sent');
    sheet.getRange(row, 8).setValue(new Date()); // Invitation Sent At
  }

  // STEP 2 – Welcome info + calendar invite
  if (currentStep === 2 && status === 'Confirmed') {
    sendWelcomeEmail(row);
    createAllDayCalendarInvite(row);
  }
}
