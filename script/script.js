/**************************script pour page Vêtements 1 et 2**************************/
function changer_image1() {
	var image = document.getElementById('image1');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image2() {
	var image = document.getElementById('image2');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image3() {
	var image = document.getElementById('image3');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image4() {
	var image = document.getElementById('image4');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image5() {
	var image = document.getElementById('image5');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image6() {
	var image = document.getElementById('image6');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image7() {
	var image = document.getElementById('image7');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image8() {
	var image = document.getElementById('image8');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image9() {
	var image = document.getElementById('image9');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image10() {
	var image = document.getElementById('image10');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image11() {
	var image = document.getElementById('image11');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image12() {
	var image = document.getElementById('image12');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image13() {
	var image = document.getElementById('image13');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function changer_image14() {
	var image = document.getElementById('image14');
	var source = image.src;
	document.getElementById('IMG').src = source;
}

function lol() {
	document.getElementById("l").innerHTML = "je suis beau mais moche"
}

/*********drag and drop*********/

function drag(ev) {
  ev.dataTransfer.setData("Text",ev.target.id);
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data=ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
}


/**************************script pour page QCM 1**************************/

let q1 = document.getElementById("question1")
let q2 = document.getElementById("question2")
let q3 = document.getElementById("question3")
let q4 = document.getElementById("question4")
let q5 = document.getElementById("question5")
let q6 = document.getElementById("question6")
let q7 = document.getElementById("question7")
let q8 = document.getElementById("question8")


/*********apparaitre question d'après*********/

function apperre_next_answer1(){
	q1.style.display = "none"
	q2.style.display = "block"
}

function apperre_next_answer2(){
	q2.style.display = "none"
	q3.style.display = "block"
}

function apperre_next_answer3(){
	q3.style.display = "none"
	q4.style.display = "block"
}

function apperre_next_answer4(){
	q4.style.display = "none"
	q5.style.display = "block"
}

function apperre_next_answer5(){
	q5.style.display = "none"
	q6.style.display = "block"
}

function apperre_next_answer6(){
	q6.style.display = "none"
	q7.style.display = "block"
}

function apperre_next_answer7(){
	q7.style.display = "none"
	q8.style.display = "block"
}


/*********apparaitre les question précédente*********/

function apperre_after_answer1(){
	q2.style.display = "none"
	q1.style.display = "block"
}

function apperre_after_answer2(){
	q3.style.display = "none"
	q2.style.display = "block"
}

function apperre_after_answer3(){
	q4.style.display = "none"
	q3.style.display = "block"
}

function apperre_after_answer4(){
	q5.style.display = "none"
	q4.style.display = "block"
}

function apperre_after_answer5(){
	q6.style.display = "none"
	q5.style.display = "block"
}

function apperre_after_answer6(){
	q7.style.display = "none"
	q6.style.display = "block"
}

function apperre_after_answer7(){
	q8.style.display = "none"
	q7.style.display = "block"
}