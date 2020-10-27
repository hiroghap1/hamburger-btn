const hamburgerBtn = document.getElementById('hamburger-btn');
const drawerNav = document.getElementById('drawer-nav');
const body = document.querySelector('body');
let drawerNavAria;
let hamburgerBtnAria;
let hamburgerBtnExpand;

window.addEventListener('load', navAria, false);
window.addEventListener('resize', navAria, false);

hamburgerBtn.addEventListener('click', activeToggle, false);

function activeToggle() {
    if (hamburgerBtnExpand) {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtnExpand = false;
    } else {
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        hamburgerBtnExpand = true;
    }
    if (drawerNavAria) {
        drawerNav.setAttribute('aria-hidden', 'false');
        drawerNavAria = false;
        drawerNav.querySelector('.header-nav-item:first-child .header-nav-item__link').focus();
    } else {
        drawerNav.setAttribute('aria-hidden', 'true');
        drawerNavAria = true;
    }
    body.classList.toggle('fixed');
}

function navAria() {
    const w = window.innerWidth;
    if (w <= 768) {
        if (hamburgerBtnAria) {
            hamburgerBtn.setAttribute('aria-hidden', 'false');
            hamburgerBtnAria = false;
        }
        if (hamburgerBtnExpand && !drawerNavAria || !hamburgerBtnExpand && drawerNavAria) {
            return;
        } else {
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            hamburgerBtnExpand = false;
            drawerNav.setAttribute('aria-hidden', 'true');
            drawerNavAria = true;
        }
    } else {
        if (hamburgerBtnExpand) {
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            hamburgerBtnExpand = false;
        }
        if (!hamburgerBtnAria) {
            hamburgerBtn.setAttribute('aria-hidden', 'true');
            hamburgerBtnAria = true;
        }
        if (drawerNavAria) {
            drawerNav.setAttribute('aria-hidden', 'false');
            drawerNavAria = false;
        }
    }
}