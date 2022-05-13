/**************************Code de base**************************/
let user = sessionStorage.getItem("nom_user");
document.getElementById("user_name").innerHTML = user;

/**************************script pour page Vêtements 1**************************/

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

function get_answer() {
	
}