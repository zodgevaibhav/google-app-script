function myFunction() {

  var files = DriveApp.getFiles()

  while(files.hasNext())
  {
    var file = files.next()
    
    file.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.NONE)
  }
  
}
