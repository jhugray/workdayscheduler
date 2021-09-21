
$("#btn9").click(function(event) {
  event.preventDefault();
  var textInput = $("#calText9").val(); 
  console.log(textInput);
  localStorage.setItem("savedCalEntry9", JSON.stringify(textInput));
});

$("#btn10").click(function(event) {
  event.preventDefault();
  var textInput = $("#calText10").val(); 
  console.log(textInput);
  localStorage.setItem("savedCalEntry10", JSON.stringify(textInput));
});

$("#btn11").click(function(event) {
  event.preventDefault();
  var textInput = $("#calText11").val(); 
  console.log(textInput);
  localStorage.setItem("savedCalEntry11", JSON.stringify(textInput));
});

$("#btn12").click(function(event) {
  event.preventDefault();
  var textInput = $("#calText12").val(); 
  console.log(textInput);
  localStorage.setItem("savedCalEntry12", JSON.stringify(textInput));
});

$("#btn13").click(function(event) {
  event.preventDefault();
  var textInput = $("#calText13").val(); 
  console.log(textInput);
  localStorage.setItem("savedCalEntry13", JSON.stringify(textInput));
});

$("#btn14").click(function(event) {
  event.preventDefault();
  var textInput = $("#calText14").val(); 
  console.log(textInput);
  localStorage.setItem("savedCalEntry14", JSON.stringify(textInput));
});

$("#btn15").click(function(event) {
  event.preventDefault();
  var textInput = $("#calText15").val(); 
  console.log(textInput);
  localStorage.setItem("savedCalEntry15", JSON.stringify(textInput));
});

$("#btn16").click(function(event) {
  event.preventDefault();
  var textInput = $("#calText16").val(); 
  console.log(textInput);
  localStorage.setItem("savedCalEntry16", JSON.stringify(textInput));
});

$("#btn17").click(function(event) {
  event.preventDefault();
  var textInput = $("#calText17").val(); 
  console.log(textInput);
  localStorage.setItem("savedCalEntry17", JSON.stringify(textInput));
});


$("#calText9").val(JSON.parse(localStorage.getItem("savedCalEntry9")));
$("#calText10").val(JSON.parse(localStorage.getItem("savedCalEntry10")));
$("#calText11").val(JSON.parse(localStorage.getItem("savedCalEntry11")));
$("#calText12").val(JSON.parse(localStorage.getItem("savedCalEntry12")));
$("#calText13").val(JSON.parse(localStorage.getItem("savedCalEntry13")));
$("#calText14").val(JSON.parse(localStorage.getItem("savedCalEntry14")));
$("#calText15").val(JSON.parse(localStorage.getItem("savedCalEntry15")));
$("#calText16").val(JSON.parse(localStorage.getItem("savedCalEntry16")));
$("#calText17").val(JSON.parse(localStorage.getItem("savedCalEntry17")));
