var calEntryText = "";

function calendarText() {
  var calEntryText = document.getElementById("calText").value;
  var calEntryText = document.getElementById("calText").innerHTML;
  return calEntryText;
}

function saveButton() {
  var saveB = document.getElementsByClassName("saveBtn");
  var saveB = onclick= "calendarText()";
  return saveB; 
}