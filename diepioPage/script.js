
const video = document.getElementById("myVideo");

const btn = document.getElementById("myBtn");

btn.addEventListener('click', videoFunction)

function videoFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

const btnNote = document.getElementById("btnNote");

const textDiep = document.getElementById("textDiep");

btnNote.addEventListener('click', noteFunction)

function noteFunction() {
    if (btnNote.textContent === "Clique ici") {
        btnNote.innerHTML = "Descriptif du jeu";
        textDiep.innerHTML = "Je donne la note de 15/20 car c'est un jeu assez addictif et drôle. C'est un jeu qui peut se jouer entre amis et avec des équipes, j'y ai beaucoup joué et ça m'a vraiment plu.";
        textDiep.style.fontSize = "1em";
    } else {
        btnNote.innerHTML = "Clique ici";
        textDiep.innerHTML = "Diep.io (parfois prononcé Diepio en un mot) est un jeu en ligne gratuit en 2D créé par Matheus Valadares, développeur d'Agar.io, un jeu vidéo également en 2D et gratuit. Le joueur contrôle un tank, au début constitué d'un simple cercle et d'un rectangle gris représentant son canon, et doit tirer sur des polygones (carrés, triangles, pentagones et alpha pentagones, des pentagones plus grands que les autres formes qui produit des pentagones normaux) afin de gagner des niveaux et d'améliorer les statistiques du tank.";
        textDiep.style.fontSize = "0.8em";
    }
}
