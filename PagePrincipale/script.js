
const modal = document.getElementById('id01');

//Quand l'utilisateur clique n'importe hors du bloc de login, le bloc disparait
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Quand l'utilisateur clique sur le bouton "Se connecter", le bloc pour se connecter apparaît
const button = document.getElementById('connectedButton');

button.addEventListener('click', buttonclicked); //L'event s'active quand je clique sur le bouton

function buttonclicked() {

    if(button.textContent === "Se connecter") { //Si le contenu du bouton est "Se connecter", je fais apparaître le bloc
        document.getElementById('id01').style.display='block';
    } 
}

//Accès à la page 1 si l'utilisateur est connecté
const buttonGame1 = document.getElementById('img1');

buttonGame1.addEventListener('click', buttonclickedGames1);

function buttonclickedGames1() {

    if(button.textContent === "Se connecter") {
        alert('Tu dois te connecter avant d\'accéder à la page'); //Envoie une alert si je ne suis pas connecté et que je clique sur le bouton
    } else {
        document.location.href="../deuxieme/page2.html"; //Sinon je renvoie l'utilisateur à la page demandée
    }
}

//Accès à la page 2 si l'utilisateur est connecté
const buttonGame2 = document.getElementById('img2');

buttonGame2.addEventListener('click', buttonclickedGames2);

function buttonclickedGames2() {

    if(button.textContent === "Se connecter") {
        alert('Tu dois te connecter avant d\'accéder à la page');
    } else {
        document.location.href="../troisieme/page3.html";
    }
}

//Accès à la page 3 si l'utilisateur est connecté
const buttonGame3 = document.getElementById('img3');

buttonGame3.addEventListener('click', buttonclickedGames3);

function buttonclickedGames3() {

    if(button.textContent === "Se connecter") {
        alert('Tu dois te connecter avant d\'accéder à la page');
    } else {
        document.location.href="../diepioPage/index.html";
    }
}

//bouton pour se connecter
const formID = document.getElementById('formID');

const inputName = document.getElementById('inputName');

const inputEmail = document.getElementById('inputEmail');

formID.addEventListener('submit', submitForm); //Si j'appuie sur le bouton de fin de formulaire (submit parce qu'il faut que tous les champs du formulaire soit rempli)

function submitForm() {

    localStorage.setItem('pseudo', inputName.value); //Je stocke l'item "pseudo" dans localStorage
}

const decoButton = document.getElementById('deconnexionButton');

if(button.textContent = "Se connecter" && localStorage.getItem('pseudo')) { // Si le contenu du bouton est "Se connecter" et que l'item "pseudo" existe dans localStorage
    button.textContent = "Connecté en tant que : " + localStorage.getItem('pseudo'); //Le contenu du bouton change
    decoButton.style.display = "block"; //J'affiche le bouton de déconnexion afin de pouvoir se déconnecter
} else {
    button.textContent = "Se connecter"; //Si la condition n'est pas remplie, le bouton reste avec son contenu de base
}

decoButton.addEventListener('click', decoClick); //Quand l'utilisateur clique sur le bouton de déconnexion

function decoClick() {

    localStorage.clear('pseudo'); //J'efface l'item "pseudo" dans le localStorage

    location.reload(); //Je refresh la page

}