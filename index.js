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


const see = document.getElementById('see');
const eat = document.getElementById('eat');
const listen = document.getElementById('find');
const find = document.getElementById('find');
const container_p = document.getElementById('container_p');

const initialLeftlisten = parseInt(getComputedStyle(listen).left);
const initialLeftfind = parseInt(getComputedStyle(find).left);
const initialLefteat = window.innerWidth <= 820 ? -300 : -500; // 根據視窗大小調整初始位置


window.addEventListener('scroll', function() {
    const windowHeight = window.scrollY;
    if (windowHeight > 400){
      toTop.style.rotate = "-90deg";
      up.innerHTML = "toTop";
    }else{
      toTop.style.rotate = "90deg";
      up.innerHTML = "scroll";
    }
    if (windowHeight > 2700) {
      eat.style.animation = 'slideInLeft 1s ease-out forwards';
    } else {
      eat.style.animation = 'none';
    }
    console.log(windowHeight);
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
  const currentText2 = images[index].getAttribute('data-h2');
  const textContainer2 = document.querySelector('.img_subtitle');
  textContainer1.textContent = currentText1;
  textContainer2.textContent = currentText2;
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


  
  
  
  
  