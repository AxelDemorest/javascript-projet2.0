const img = document.getElementsByClassName('imgAccess');

img.addEventListener('click', imgClicked());

function imgClicked() {
    console.log('coucou')
    document.location.href="https://www.apple.com"
}

