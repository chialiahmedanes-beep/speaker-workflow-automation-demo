/**
 * Creates an all-day calendar invitation for the speaker
 * and stores the Calendar Event ID in the spreadsheet
 */
function createAllDayCalendarInvite(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Column assumptions for demo
  const SPEAKER_NAME_COL = 1;
  const SPEAKER_EMAIL_COL = 2;
  const EVENT_NAME_COL = 3;
  const EVENT_DATE_COL = 4;
  const CALENDAR_EVENT_ID_COL = 9;

  const speakerName = sheet.getRange(row, SPEAKER_NAME_COL).getValue();
  const speakerEmail = sheet.getRange(row, SPEAKER_EMAIL_COL).getValue();
  const eventName = sheet.getRange(row, EVENT_NAME_COL).getValue();
  const eventDate = sheet.getRange(row, EVENT_DATE_COL).getValue();

  const calendar = CalendarApp.getDefaultCalendar();

  const startDate = new Date(eventDate);
  const endDate = new Date(eventDate);
  endDate.setDate(endDate.getDate() + 1);

  const calendarEvent = calendar.createAllDayEvent(
    `${eventName} – Speaker Participation`,
    startDate,
    endDate,
    {
      guests: speakerEmail,
      sendInvites: true,
      description: `You are confirmed as a speaker at ${eventName}.`
    }
  );

  // Save Calendar Event ID for future updates
  sheet.getRange(row, CALENDAR_EVENT_ID_COL).setValue(calendarEvent.getId());
}
