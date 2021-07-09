const hamburgerBtn = document.getElementById('hamburger-btn');
hamburgerBtn.addEventListener('click',function(){
    this.classList.toggle('active');
});
//
// const options = {
//     root: null, // 今回はビューポートをルート要素とする
//     rootMargin: "0px 0px", // ビューポートの中心を判定基準にする
//     threshold: 0 // 閾値は0
// };
//
// const observer = new IntersectionObserver(function (entries) {
//     for( let i = 0; i < entries.length; i++) {
//         if(entries[i].isIntersecting) {
//             entries[i].target.classList.add('show');
//         }
//     }
// },options);
//
// const elm = document.querySelectorAll('p');
// for( let i = 0; i < elm.length; i++) {
//     observer.observe(elm[i]);
// }