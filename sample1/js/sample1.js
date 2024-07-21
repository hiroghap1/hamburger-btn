const hamburgerBtn = document.getElementById('hamburger-btn');
hamburgerBtn.addEventListener('click',()=>{
    hamburgerBtn.classList.toggle('active');
});


/* 以下はスクロールアニメーションのサンプル */
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


performance.mark('myPerformanceStart') // 開始点
console.log(document.querySelector('#hamburger-btn')); // 計測する処理
performance.mark('myPerformanceEnd') // 終了点

performance.measure(
    'myPerformance', // 計測名
    'myPerformanceStart', // 計測開始点
    'myPerformanceEnd' // 計測終了点
);

// 結果の取得
const results = performance.getEntriesByName('myPerformance');

// 表示
console.log(results[0]);