const hamburgerBtn = document.getElementById('hamburger-btn');
const drawerNav = document.getElementById('drawer-nav');
const body = document.querySelector('body');
const mediaQueryList = matchMedia('(min-width: 768px)');
let drawerNavAria;
let hamburgerBtnAria;
let hamburgerBtnExpand;

// 画面サイズでNavigationの状態を監視
onMediaChange(mediaQueryList);
mediaQueryList.addEventListener('change',onMediaChange);

// ハンバーガーボタンにクリックイベントを設定
hamburgerBtn.addEventListener('click', activeToggle, false);

//ハンバーガーボタンをクリックしたとき
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

// ブレイクポイントをまたいだとき
function onMediaChange(mq) {
    if (mq.matches) {
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
        body.classList.remove('fixed');
    } else {
        if (hamburgerBtnAria) {
            hamburgerBtn.setAttribute('aria-hidden', 'false');
            hamburgerBtnAria = false;
        }
        if (hamburgerBtnExpand && !drawerNavAria || !hamburgerBtnExpand && drawerNavAria) {
        } else {
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            hamburgerBtnExpand = false;
            drawerNav.setAttribute('aria-hidden', 'true');
            drawerNavAria = true;
        }
    }
}