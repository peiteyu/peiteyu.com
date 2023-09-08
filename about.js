const listItems = document.querySelectorAll('#myList li');
let delay = 0;
window.addEventListener('load', function() {   
    listItems.forEach(item => {
      setTimeout(() => {
        item.style.opacity = '1';
      }, delay);
      delay += 200; // 延遲每個項目的顯示時間
    });
});

const toTop = document.getElementById('toTop');
const up = document.getElementById('up');

toTop.addEventListener('click',function () {
  document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', function() {
  const windowHeight = window.scrollY;
  if (windowHeight > 400){
    toTop.style.rotate = "-90deg";
    up.innerHTML = "toTop";
  }else{
    toTop.style.rotate = "90deg";
    up.innerHTML = "scroll";
  }
});