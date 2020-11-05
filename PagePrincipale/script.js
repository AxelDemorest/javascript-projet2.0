// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const button = document.getElementById('connectedButton');

button.addEventListener('click', buttonclicked);

function buttonclicked() {

    if(button.textContent === "Se connecter") {
        document.getElementById('id01').style.display='block';
    } 
}

//Accès à la page 1 si l'utilisateur est connecté
const buttonGame1 = document.getElementById('img1');

buttonGame1.addEventListener('click', buttonclickedGames1);

function buttonclickedGames1() {

    if(button.textContent === "Se connecter") {
        alert('Tu dois te connecter avant d\'accéder à la page');
    } else {
        document.location.href="../deuxieme/page2.html";
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

formID.addEventListener('submit', submitForm);

function submitForm() {

    localStorage.setItem('pseudo', inputName.value);
}

const decoButton = document.getElementById('deconnexionButton');

if(button.textContent = "Se connecter" && localStorage.getItem('pseudo')) {
    button.textContent = "Connecté en tant que : " + localStorage.getItem('pseudo');
    decoButton.style.display = "block";
} else {
    button.textContent = "Se connecter";
}

decoButton.addEventListener('click', decoClick);

function decoClick() {

    localStorage.clear('pseudo');

    location.reload();
}
