// JavaScript Document
/*
	Student Name: Daniel Richards
	File Name: script.js
	Date: 3/25/2022
*/

// Hamburger menu function
	function hamburger() {
		var menu = document.getElementById("menu-links");
		var logo = document.getElementById("ffc-logo");
		if (menu.style.display === "block" && logo.style.display === "none"){
			menu.style.display = "none"; 
			logo.style.display = "block";
		
		
	} else {
		menu.style.display = "block";
		logo.style.display = "none";
	}

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("Vid-src");
var descriptionSource = document.getElementById("despsrc");

//Function to display the burpee example video
function burpee() {
	videoSource.src = "media/burpee.mp4";
	descriptionSource.src = "media/burpee-descriptions.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display the plank example video
function plank() {
	videoSource.src = "media/plank.mp4";
	descriptionSource.src = "media/plank-descriptions.vtt";
	video.style.display = "block";
	video.load(); 
}

//Function to display the mountain climbers example video
function mountain() {
	videoSource.src = "media/mc.np4";
	descriptionSource.src = "media/mountain-description.vtt";
	video.style.display = "block";
	video.load();
}

//Function to display a promo code
function discount() {
	var promo = document.gotElementById("special");
	promo.firstChild.nodeValue = "Promo Code; D25START";
	promo.style.color = "#EE0000";
	promo.style.fontsize = "2em";
}





