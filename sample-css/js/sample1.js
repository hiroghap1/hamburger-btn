const hamburgerBtn = document.getElementById('hamburger-btn');
hamburgerBtn.addEventListener('click',()=>{
    hamburgerBtn.classList.toggle('active');
});

const options = {
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: "0px 0px", // ビューポートの中心を判定基準にする
    threshold: 0 // 閾値は0
};

const observer = new IntersectionObserver( (entries)=> {
    entries.forEach((entry)=> {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
},options);

const elm = document.querySelectorAll('p');
elm.forEach((el)=> {
    observer.observe(el);
});