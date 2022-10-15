
//FOR DATE VALIDATING
function dateValidate(){
  if(document.getElementById('sdate').value> document.getElementById('edate').value){
    alert('SET DATE CORRECTLY');
    document.getElementById('edate').value="";
  }
}

//FOR TIME VALIDATING
function timeValidate(){
  if(document.getElementById('stime').value > document.getElementById('etime').value){
  alert('SET TIME CORRECTLY');
  document.getElementById('etime').value="";
}
}

//FOR TOGGLE OF SCHEDULE DISPLAY
function ShowSchedule(){
  if(document.getElementById('Schedule_div').style.display=='none')
  {
    document.getElementById('Schedule_div').style.display='block';
    document.getElementById('list_div').style.display='none';
    document.getElementById('form').style.display='none';
    
  }
  }

  function ShowList(){
    if(document.getElementById('list_div').style.display='none')
    {
      document.getElementById('list_div').style.display='block';
      document.getElementById('Schedule_div').style.display='none';
      document.getElementById('form').style.display='none';
    }
  }

  function ShowForm(){
    if(document.getElementById('form').style.display='none')
    {
      document.getElementById('list_div').style.display='none';
      document.getElementById('Schedule_div').style.display='none';
      document.getElementById('form').style.display='block';
    }
  }