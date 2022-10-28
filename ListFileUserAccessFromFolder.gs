function myFunction() {
  var parFolder = DriveApp.getFolderById("abcd_Efghijklmnofop_st")
  var childFolder = parFolder.getFolders()

  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/2abf76vh7sd6f7sdv6ds7f6/edit#gid=0")
  var s = ss.getSheetByName("ViewerAccessRaw")
  while(childFolder.hasNext())
  {
    var currentFolder=childFolder.next()
    var files = currentFolder.getFiles()
    while(files.hasNext())
    {
      var currentFile=files.next()
      var fileViewerAccess = currentFile.getViewers();
      fileViewerAccess.forEach(entry=>{
        Logger.log(currentFolder.getName()+"\\"+currentFile.getName()+"\\"+entry.getName()+" - "+entry.getEmail())
        var data=[
          currentFolder.getName(),
          entry.getName(),
          entry.getEmail(),
          currentFile.getName(),
        ];
        s.appendRow(data)
      })
    }
  }
}
