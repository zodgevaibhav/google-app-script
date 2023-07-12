function myFunction() {

  var sheet = SpreadsheetApp.openById('1sdf32f3f3f34f34f34f34f34f'); // Replace with your Google Sheet ID
  var data = sheet.getSheetByName('Sheet1').getDataRange().getValues(); // Replace 'Sheet1' with your sheet name
  var folder = DriveApp.getFolderById('34f34fdfsfswdfrhgfjfddj'); // Replace with your folder ID
  
  for (var i = 0; i < 1; i++) { // Assuming data starts from the second row (excluding header). data.length
    var name = data[i][0]; // Assuming name is in column A (index 0)
    var email = data[i][1]; // Assuming email is in column B (index 1)
    
    var document = DocumentApp.create("name"); // Create a new Google Document with the name

    var fileId = document.getId(); // Get the ID of the created document
    var file = DriveApp.getFileById(fileId); // Get the document file 
    file.addEditor(email)
    file.moveTo(folder)
  }
}
