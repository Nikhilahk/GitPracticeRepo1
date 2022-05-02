function calling_a_textFile()
{
  let FS = getActiveXObject("Scripting.FileSystemObject");

  let F = FS.Open("C://Users//11036680//Documents//PythonScript//reading_excel.js");
  var s=[];
  while(! F.AtEndOfStream)
  {
    //Log.Message(F.ReadLine());
   s.push(F.ReadLine());
  }
  return s;
  F.Close();
}


  








