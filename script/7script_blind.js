/**************************Code de base**************************/
let user = sessionStorage.getItem("nom_user");
document.getElementById("user_name").innerHTML = user;


/**************************script pour page QCM 1**************************/

let m1 = document.getElementById("musique1")
let m2 = document.getElementById("musique2")
let m3 = document.getElementById("musique3")
let m4 = document.getElementById("musique4")
let m5 = document.getElementById("musique5")

var valeur = 0;


/*********apparaitre question d'après*********/

function apperre_next_answer1(){
	m1.style.display = "none"
	m2.style.display = "block"

	if (document.getElementById('musique1_1').checked) {
		valeur += 0
	}

	if (document.getElementById('musique1_2').checked) {
		valeur += 1
	}

	if (document.getElementById('musique1_3').checked) {
		valeur += 0
	}
}

function apperre_next_answer2(){
	m2.style.display = "none"
	m3.style.display = "block"

	if (document.getElementById('musique2_1').checked) {
		valeur += 1
	}

	if (document.getElementById('musique2_2').checked) {
		valeur += 0
	}

	if (document.getElementById('musique2_3').checked) {
		valeur += 0
	}
}

function apperre_next_answer3(){
	m3.style.display = "none"
	m4.style.display = "block"

	if (document.getElementById('musique3_1').checked) {
		valeur += 0
	}

	if (document.getElementById('musique3_2').checked) {
		valeur += 2
	}

	if (document.getElementById('musique3_3').checked) {
		valeur += 0
	}
}

function apperre_next_answer4(){
	m4.style.display = "none"
	m5.style.display = "block"

	if (document.getElementById('musique4_1').checked) {
		valeur += 0
	}

	if (document.getElementById('musique4_2').checked) {
		valeur += 0
	}

	if (document.getElementById('musique4_3').checked) {
		valeur += 1
	}
}


function comptage() {

	if (document.getElementById('musique5_1').checked) {
		valeur += 0
	}

	if (document.getElementById('musique5_2').checked) {
		valeur += 1
	}

	if (document.getElementById('musique5_3').checked) {
		valeur += 0
	}

	sessionStorage.setItem("blind", valeur)

}