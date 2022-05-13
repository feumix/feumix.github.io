var animes = sessionStorage.getItem("anime")
var anime = parseInt(animes)

var QCMs = sessionStorage.getItem("QCM")
var QCM = parseInt(QCMs)

var blinds = sessionStorage.getItem("blind")
var blind = parseInt(blinds)

var valeur = anime + QCM + blind

document.getElementById("score").innerHTML = valeur

if (valeur > 39) {
    document.getElementById("case").innerHTML = "Conforme : <br>Vous êtes le profil le plus conforme au nouveau monde, vous aiderez au développement de cette société"
}

if (valeur > 27 && valeur < 40) {
    document.getElementById("case").innerHTML = "Conforme : <br>Vous répondez à la majeure partie des critères imposés par le nouveaux monde vous pouvez être utile à la société"
}

if (valeur > 15 && valeur < 28) {
    document.getElementById("case").innerHTML = "Inconforme : <br>Vous n'avez pas les critères primordiaux, nous ne voulons pas d'individus qui puissent pas rentrer dans les normes du nouveau monde."
}

else if (valeur < 16) {
    document.getElementById("case").innerHTML = "Inconforme : <br>Vous vous confirmez trop aux façades et aux apparences pour rentrer à tout prix dans des casess, nous recherchons des individues qui puissent aider notre société."
}