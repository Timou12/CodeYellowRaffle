/* function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("nav-item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
 
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(); */

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

var tabx = 1;

$("#defaultOpen").click(function(){
  tabx = 1;
  if (tabx = 1) {   
    $(".under-line").get(0).style.setProperty("left", "4%");
    $(".tasks").get(0).style.setProperty("left", "0");
    $(".tasks").get(0).style.setProperty("top", "90px");
	$(".under-line").get(0).style.setProperty("height", "6px");
 }
});

$("#profilesTab").click(function(){
  tabx = 2;
  if (tabx = 2) {
    $(".under-line").get(0).style.setProperty("left", "24.5%");
    $(".tasks").get(0).style.setProperty("left", "-100%");
    $(".tasks").get(0).style.setProperty("top", "90px");
	$(".under-line").get(0).style.setProperty("height", "6px");
  }  
});

$("#proxiesTab").click(function(){
  tabx = 3;
  if (tabx = 3) {
    $(".under-line").get(0).style.setProperty("left", "63.5%");
    $(".tasks").get(0).style.setProperty("left", "-200%"); 
    $(".tasks").get(0).style.setProperty("top", "90px");
	$(".under-line").get(0).style.setProperty("height", "6px");	
}
});

$("#settingsTab").click(function(){
  tabx = 4;
  if (tabx = 4) {
    $(".under-line").get(0).style.setProperty("left", "83.5%");
    $(".tasks").get(0).style.setProperty("left", "-300%");
    $(".tasks").get(0).style.setProperty("top", "90px"); 
	$(".under-line").get(0).style.setProperty("height", "6px");
}  
});

$("#creattask").click(function(){
  tabx = 5;
  if (tabx = 5) {
    $(".tasks").get(0).style.setProperty("left", "100%");
    $(".tasks").get(0).style.setProperty("top", "0px"); 
	$(".under-line").get(0).style.setProperty("height", "0px");
}  
});

$("#addprox").click(function(){
  tabx = 5;
  if (tabx = 5) {
    $(".tasks").get(0).style.setProperty("left", "-200%");
    $(".tasks").get(0).style.setProperty("top", "-100%"); 
	$(".under-line").get(0).style.setProperty("height", "0px");
}  
});

$("#autoenter").click(function(){
  tabx = 6;
  if (tabx = 6) {
    $(".under-line").get(0).style.setProperty("left", "83.5%");
    $(".tasks").get(0).style.setProperty("left", "-400%");
    $(".tasks").get(0).style.setProperty("top", "90px"); 
	$(".under-line").get(0).style.setProperty("height", "0px");
}  
});

$("#eeconfig").click(function(){
  tabx = 7;
  if (tabx = 7) {
    $(".tasks").get(0).style.setProperty("left", "0%");
    $(".tasks").get(0).style.setProperty("top", "-100%"); 
	$(".under-line").get(0).style.setProperty("height", "0px");
}  
});

$("#addMails").click(function(){
  tabx = 1;
  if (tabx = 1) {   
    $(".under-line").get(0).style.setProperty("left", "4%");
    $(".tasks").get(0).style.setProperty("left", "0");
    $(".tasks").get(0).style.setProperty("top", "90px");
	$(".under-line").get(0).style.setProperty("height", "6px");
 }
});

$('#sickomode').change(function(){
    if ($(this).is(':checked')) {
		$(".under-line").get(0).style.setProperty("transition", "0s");
		$(".tasks").get(0).style.setProperty("transition", "0s");
    } else { 
		$(".under-line").get(0).style.setProperty("transition", ".5s");
		$(".tasks").get(0).style.setProperty("transition", ".5s");
	}
 });


$(".massenter").click(function() {
  $("#massenter").css("display", "block");
  $("#autoenterx").css("display", "none");
});

$(".singleenter").click(function() {
  $("#massenter").css("display", "none");
  $("#autoenterx").css("display", "block");
});




var slider = document.getElementById("gmailLimit");
var output = document.getElementById("gmailLimitShow");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider2 = document.getElementById("catchallLimit");
var output2 = document.getElementById("catchallLimitShow");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}