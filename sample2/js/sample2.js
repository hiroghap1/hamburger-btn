const hamburgerBtn = document.getElementById('hamburger-btn');
const body = document.querySelector('body');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
body.appendChild(overlay);

hamburgerBtn.addEventListener('click',activeToggle,false);
overlay.addEventListener('click',activeToggle,false);

function activeToggle() {
    hamburgerBtn.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('fixed');
}