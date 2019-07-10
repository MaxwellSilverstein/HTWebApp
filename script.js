
/*$('#upload').click(function(){
//here would call the upload function
$('#getDataSet').html("<b>wow</b>");

});*/
var tempListFiles = [];
var fileElem = document.getElementById("files");
var getDat = document.getElementById('getDataSet');
var displayFile = document.getElementById('displayFileNames');
var count =0;
/*getDat.onclick = function(){

  for (var i = 0; i < tempFiles.length; i++)
  {
   alert(tempFiles[i].name);
   //API func(files[i])
  }
}*/
//  $('#ulxx').append("  <li id='getDataSet'><a href = '#'>Get Data Set</a></li>")
function UploadToCloud(){
  for (var i = 0; i < tempListFiles.length; i++){
    if(tempListFiles[i]!=null){
      alert(tempListFiles[i].name)
    }

  }
  tempListFiles = [];
  $('#displayFileNames').html('')
  count = 0
}


function AppendFiles(){
  for (var i = 0; i < regForm.files.files.length; i++){
    tempListFiles.push(regForm.files.files[i]);
    // alert(tempFiles[i].name);
    //API func(files[i])
    $('#displayFileNames').append( "<div id = 'pref'> X </div> <br>");
    $('#pref').attr('id','File'+count);
    $('#File'+count).prepend(regForm.files.files[i].name);
    $('#File'+count).click(function(){
          var id1= $(this).attr('id')
          $('#' +id1).remove();
          tempListFiles[ parseInt(id1.replace('File',''))] = null;
    });
    count++;
  }


}
