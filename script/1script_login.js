function get_login() {
    var entry_name = document.getElementById("entry_user_name").value;
    sessionStorage.setItem("nom_user", entry_name);
}

function verifierCaracteres(event) {
	 		
	var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);
			
	var champ = document.getElementById('mon_input');
			
	var caracteres = 'abcdefghijklmnopqrstuvwxyz';
			
	if(caracteres.indexOf(touche) >= 0) {
		champ.value += touche;
	}
			
}