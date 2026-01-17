function doPost(e) {
    try {
        // Open het actieve spreadsheet
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Parse de JSON data
        const data = JSON.parse(e.postData.contents);

        // Voeg een nieuwe rij toe met timestamp en feedback
        sheet.appendRow([
            data.timestamp || new Date().toISOString(),
            data.feedback || ''
        ]);

        // Return success response
        return ContentService
            .createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Return error response
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                error: error.toString()
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
