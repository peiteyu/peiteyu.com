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
const initialLeftsee = parseInt(getComputedStyle(see).left);
// const initialLefteat = parseInt(getComputedStyle(eat).left);
const initialLeftlisten = parseInt(getComputedStyle(listen).left);
const initialLeftfind = parseInt(getComputedStyle(find).left);
const initialLefteat = window.innerWidth <= 820 ? -300 : -500; // 根據視窗大小調整初始位置


window.addEventListener('scroll', function() {
    const windowHeight = window.scrollY;
    if (windowHeight > 300) {
        see.style.animation = 'slideInLeft 1s ease-out forwards';
        container_p.style.opacity = '1';
    } else {
        see.style.animation = 'none';
        see.style.left = initialLeftsee + 'px';
        container_p.style.opacity = '0';
    }

    if (windowHeight > 2700) {
        eat.style.animation = 'slideInLeft 1s ease-out forwards';
    } else {
        eat.style.animation = 'none';
        eat.style.left = initialLeftsee + 'px';
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
  const currentText = images[index].getAttribute('data-h1');
  const textContainer = document.querySelector('.img_title');
  textContainer.textContent = currentText;
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


  
  
  
  
  