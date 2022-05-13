/**************************Code de base**************************/
let user = sessionStorage.getItem("nom_user");
document.getElementById("user_name").innerHTML = user;

/**************************script pour page QCM 1**************************/

let q1 = document.getElementById("question1")
let q2 = document.getElementById("question2")
let q3 = document.getElementById("question3")
let q4 = document.getElementById("question4")
let q5 = document.getElementById("question5")
let q6 = document.getElementById("question6")
let q7 = document.getElementById("question7")
let q8 = document.getElementById("question8")

var valeur = 0;

/*********apparaitre question d'après*********/

function apperre_next_answer1(){
	q1.style.display = "none"
	q2.style.display = "block"

	if (document.getElementById('quest1_1').checked) {
		valeur += 0
	}

	if (document.getElementById('quest1_2').checked) {
		valeur += 1
	}

	if (document.getElementById('quest1_3').checked) {
		valeur += 0
	}

	if (document.getElementById('quest1_4').checked) {
		valeur += 0
	}
}

function apperre_next_answer2(){
	q2.style.display = "none"
	q3.style.display = "block"

	if (document.getElementById('quest2_1').checked) {
		valeur += 1
	}

	if (document.getElementById('quest2_2').checked) {
		valeur += 0
	}

	if (document.getElementById('quest2_3').checked) {
		valeur += 0
	}

	if (document.getElementById('quest2_4').checked) {
		valeur += 0
	}
}

function apperre_next_answer3(){
	q3.style.display = "none"
	q4.style.display = "block"

	if (document.getElementById('quest3_1').checked) {
		valeur += 0
	}

	if (document.getElementById('quest3_2').checked) {
		valeur += 0
	}

	if (document.getElementById('quest3_3').checked) {
		valeur += 0
	}

	if (document.getElementById('quest3_4').checked) {
		valeur += 1
	}
}

function apperre_next_answer4(){
	q4.style.display = "none"
	q5.style.display = "block"

	if (document.getElementById('quest4_1').checked) {
		valeur += 0
	}

	if (document.getElementById('quest4_2').checked) {
		valeur += 0
	}

	if (document.getElementById('quest4_3').checked) {
		valeur += 0
	}

	if (document.getElementById('quest4_4').checked) {
		valeur += 1
	}
}

function apperre_next_answer5(){
	q5.style.display = "none"
	q6.style.display = "block"

	if (document.getElementById('quest5_1').checked) {
		valeur += 0
	}

	if (document.getElementById('quest5_2').checked) {
		valeur += 0
	}

	if (document.getElementById('quest5_3').checked) {
		valeur += 1
	}

	if (document.getElementById('quest5_4').checked) {
		valeur += 0
	}
}

function apperre_next_answer6(){
	q6.style.display = "none"
	q7.style.display = "block"

	if (document.getElementById('quest6_1').checked) {
		valeur += 1
	}

	if (document.getElementById('quest6_2').checked) {
		valeur += 0
	}

	if (document.getElementById('quest6_3').checked) {
		valeur += 0
	}

	if (document.getElementById('quest6_4').checked) {
		valeur += 0
	}
}

function apperre_next_answer7(){
	q7.style.display = "none"
	q8.style.display = "block"

	if (document.getElementById('quest7_1').checked) {
		valeur += 0
	}

	if (document.getElementById('quest7_2').checked) {
		valeur += 1
	}

	if (document.getElementById('quest7_3').checked) {
		valeur += 0
	}

	if (document.getElementById('quest7_4').checked) {
		valeur += 0
	}
}


/*********apparaitre les question précédente*********/

function apperre_after_answer1(){
	q2.style.display = "none"
	q1.style.display = "block"

	valeur -= 1;
}

function apperre_after_answer2(){
	q3.style.display = "none"
	q2.style.display = "block"

	valeur -= 1;
}

function apperre_after_answer3(){
	q4.style.display = "none"
	q3.style.display = "block"

	valeur -= 1;
}

function apperre_after_answer4(){
	q5.style.display = "none"
	q4.style.display = "block"

	valeur -= 1;
}

function apperre_after_answer5(){
	q6.style.display = "none"
	q5.style.display = "block"

	valeur -= 1;
}

function apperre_after_answer6(){
	q7.style.display = "none"
	q6.style.display = "block"

	valeur -= 1;
}

function apperre_after_answer7(){
	q8.style.display = "none"
	q7.style.display = "block"

	valeur -= 1;
}

function compatge() {
	if (document.getElementById('quest8_1').checked) {
		valeur += 1
	}

	if (document.getElementById('quest8_2').checked) {
		valeur += 0
	}

	if (document.getElementById('quest8_3').checked) {
		valeur += 0
	}

	if (document.getElementById('quest8_4').checked) {
		valeur += 0
	}

	sessionStorage.setItem("anime", valeur)
}