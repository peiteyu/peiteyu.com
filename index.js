const toTop = document.getElementById('toTop');
const up = document.getElementById('up');

toTop.addEventListener('click',function () {
  document.documentElement.scrollTop = 0;
})

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

const find_chiayi = document.getElementById('Chiayi');
const find_Tainan = document.getElementById('Tainan');
const sea = document.getElementById('sea');
const map1 = document.getElementById('map1');
const map2 = document.getElementById('map2');
 
find_chiayi.addEventListener('click',function(){
    map1.style.opacity = 1;
    map2.style.opacity = 0;
    find_chiayi.classList.add('active');
    find_Tainan.classList.remove('active');
})

find_Tainan.addEventListener('click',function(){
    map1.style.opacity = 0;
    map2.style.opacity = 1;
    find_Tainan.classList.add('active');
    find_chiayi.classList.remove('active');
})

// 選單
const hambur = document.getElementById('hambur_active');
const navbar = document.getElementById('navbar_active');
hambur.addEventListener('click',function(){
    if(!hambur.classList.contains('active')){
        hambur.classList.add('active');
        navbar.classList.add('active');
    }
    else{
        hambur.classList.remove('active');
        navbar.classList.remove('active');
    }
})


//圖片切換

const imgContainer = document.querySelector('.img_enviroment_box');
const prebutton = document.querySelector('.prev-button');
const nextbutton = document.querySelector('.next-button');


let currentIndex = 0;
const images = imgContainer.querySelectorAll('img');




function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
    }
  });
  const currentText1 = images[index].getAttribute('data-h1');
  const textContainer1 = document.querySelector('.img_title');
  const textContainer2 = document.querySelector('.img_subtitle');
  textContainer1.textContent = currentText1;
}



prebutton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
  
});

nextbutton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

showImage(currentIndex);


//JS動畫

const eatPosition = document.getElementById('eat'); // 通过ID或选择器选择元素
const agentTitle = document.getElementById('agentTitle');
const holmes = document.getElementById('holmes');
const ma = document.getElementById('ma');

window.addEventListener('scroll', function () {
  const windowHeight = window.scrollY;
  if (windowHeight >= 250) {
    eatPosition.style.top = "0px"; // 移动元素到頂部
    agentTitle.style.transform = "translateX(-50%) rotate(0deg) scale(1)";
  } else {
    eatPosition.style.top = "-240px"; // 这里可以根据你的需求设置一个隐藏位置
    agentTitle.style.transform = "translateX(950px) rotate(45deg) scale(1.2)";
  }

  holmes.style.top = windowHeight + "px";
  
});
