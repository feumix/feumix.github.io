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
}

function apperre_next_answer2(){
	q2.style.display = "none"
	q3.style.display = "block"

	if (document.getElementById('quest2_Poisson').checked) {
 		valeur += 1
	}

	if (document.getElementById('quest2_Vierge').checked) {
		valeur += 1
	}

	if (document.getElementById('quest2_Canceron').checked) {
		valeur += 1
	}

	if (document.getElementById('quest2_Gemauxon').checked) {
		valeur += 2
	}

	if (document.getElementById('quest2_Balance').checked) {
		valeur += 2
	}

	if (document.getElementById('quest2_Verseau').checked) {
		valeur += 2
	}

	if (document.getElementById('quest2_Belier').checked) {
		valeur += 3
	}

	if (document.getElementById('quest2_Sagittaire').checked) {
		valeur += 3
	}

	if (document.getElementById('quest2_Capricorne').checked) {
		valeur += 4
	}

	if (document.getElementById('quest2_Scorpion').checked) {
		valeur += 4
	}

	if (document.getElementById('quest2_Lion').checked) {
		valeur += 4
	}

	if (document.getElementById('quest2_Taureau').checked) {
		valeur += 3
	}
}

function apperre_next_answer3(){
	q3.style.display = "none"
	q4.style.display = "block"
}

function apperre_next_answer4(){
	q4.style.display = "none"
	q5.style.display = "block"

	if (document.getElementById('quest4_touch').checked) {
		valeur += 1
	}

	if (document.getElementById('quest4_gift').checked) {
		valeur += 3
	}

	if (document.getElementById('quest4_service').checked) {
		valeur += 2
	}

	if (document.getElementById('quest4_word').checked) {
		valeur += 4
	}

	if (document.getElementById('quest4_all').checked) {
		valeur += 2
	}

}

function apperre_next_answer5(){
	q5.style.display = "none"
	q6.style.display = "block"

	if (document.getElementById('quest5_oui').checked) {
		valeur += 3
	}

	if (document.getElementById('quest5_jsp').checked) {
		valeur += 1
	}

	if (document.getElementById('quest5_creer').checked) {
		valeur += 4
	}
}

function apperre_next_answer6(){
	q6.style.display = "none"
	q7.style.display = "block"
}

function apperre_next_answer7(){
	q7.style.display = "none"
	q8.style.display = "block"

	if (document.getElementById('quest7_1').checked) {
		valeur += 1
	}

	if (document.getElementById('quest7_2').checked) {
		valeur += 4
	}
}


/*********apparaitre les question précédente*********/

function apperre_after_answer1(){
	q2.style.display = "none"
	q1.style.display = "block"
	valeur -= 2
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

	valeur -= 2 ;
}

function apperre_after_answer5(){
	q6.style.display = "none"
	q5.style.display = "block"
}

function apperre_after_answer6(){
	q7.style.display = "none"
	q6.style.display = "block"

	valeur -= 2 ;
}

function apperre_after_answer7(){
	q8.style.display = "none"
	q7.style.display = "block"

	valeur -= 2 ;
}


function compatge() {

	if (document.getElementById('quest8_1').checked) {
		valeur += 3
	}

	if (document.getElementById('quest8_2').checked) {
		valeur += 3
	}

	if (document.getElementById('quest8_3').checked) {
		valeur += 1
	}

	if (document.getElementById('quest8_4').checked) {
		valeur += 2
	}

	sessionStorage.setItem("QCM", valeur);
}