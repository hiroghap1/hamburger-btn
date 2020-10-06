const hamburgerBtn = document.getElementById('hamburger-btn');
const drawerNav = document.getElementById('drawer-nav');
const body = document.querySelector('body');
let drawerNavAria;
let hamburgerBtnAria;

window.addEventListener('load',navAria,false);
window.addEventListener('resize',navAria,false);

hamburgerBtn.addEventListener('click',activeToggle,false);

function activeToggle() {
    if(hamburgerBtn.getAttribute('aria-expanded') == 'true') {
        hamburgerBtn.setAttribute('aria-expanded','false');
    } else {
        hamburgerBtn.setAttribute('aria-expanded','true');
    }
    if(drawerNav.getAttribute('aria-hidden') == 'true') {
        drawerNav.setAttribute('aria-hidden','false');
        drawerNavAria = false;
        drawerNav.querySelector('.header-nav-item:first-child .header-nav-item__link').focus();
    } else {
        drawerNav.setAttribute('aria-hidden','true');
        drawerNavAria = true;
    }
    body.classList.toggle('fixed');
}

function navAria() {
    const w = window.innerWidth;
    if(w <= 768) {
        if(drawerNavAria) {
            drawerNav.setAttribute('aria-hidden','false');
            drawerNavAria = false;
        } else {
            drawerNav.setAttribute('aria-hidden','true');
            drawerNavAria = true;
        }
        if(hamburgerBtnAria) {
            hamburgerBtn.setAttribute('aria-hidden','false');
            hamburgerBtnAria = false;
        } else {
            hamburgerBtn.setAttribute('aria-hidden','false');
            if(hamburgerBtn.getAttribute('aria-expanded') =='false') {
                drawerNav.setAttribute('aria-hidden','true');
                drawerNavAria = true;    
            }
        }
    } else {
        if(hamburgerBtnAria) {
            hamburgerBtn.setAttribute('aria-expanded','false');
            hamburgerBtn.setAttribute('aria-hidden','true');
        } else {
            hamburgerBtn.setAttribute('aria-expanded','false');
            hamburgerBtn.setAttribute('aria-hidden','true');
            hamburgerBtnAria = true;
        }        
        if(drawerNavAria) {
            drawerNav.setAttribute('aria-hidden','false');
        } else {
            drawerNav.setAttribute('aria-hidden','false');
            drawerNavAria = true;
        }
    }
}