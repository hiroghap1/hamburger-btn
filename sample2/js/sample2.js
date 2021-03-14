const hamburgerBtn = document.getElementById('hamburger-btn');
const body = document.querySelector('body');
const overlay = document.createElement('div');
const mediaQueryList = matchMedia('(min-width: 768px)');
overlay.classList.add('overlay');
body.appendChild(overlay);

hamburgerBtn.addEventListener('click',activeToggle,false);
overlay.addEventListener('click',activeToggle,false);
onMediaChange(mediaQueryList);
mediaQueryList.addEventListener('change',onMediaChange);

function activeToggle() {
    hamburgerBtn.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('fixed');
}

function onMediaChange(mq) {
    if (mq.matches) {
        hamburgerBtn.classList.remove('active');
        body.classList.remove('fixed');
        overlay.classList.remove('active');
    }
}