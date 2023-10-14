// 圖片文件名數組
const images = [
  {
    URL:"葵地淇DMpage (1).png",
    Text:""
  }, 
  {
    URL:"葵地淇DMpage (2).png", 
    Text:""
  }, 
  {
    URL:"葵地淇DMpage (3).png", 
    Text:"古人生活是怎麼做到調養身心呢?透過飲食攝取營養，講究食物的質量和多樣性，並將飲食與季節、地域以及個人體質互相結合，以確保身體和心靈的和諧健康。發炎為萬病根源!!有90%以上都是發炎所引起的病痛，並讓我們自身免疫力下降。為此我們透過自然食物來提升自身免疫力!!"
  }, 
  {
    URL:"葵地淇DMpage (4).png", 
    Text:"古人生活是怎麼做到調養身心呢?透過飲食攝取營養，講究食物的質量和多樣性，並將飲食與季節、地域以及個人體質互相結合，以確保身體和心靈的和諧健康。發炎為萬病根源!!有90%以上都是發炎所引起的病痛，並讓我們自身免疫力下降。為此我們透過自然食物來提升自身免疫力!!"
  }, 
  {
    URL:"葵地淇DMpage (5).png", 
    Text:"含植化素異硫氰酸鹽、8大微量元素(鋅、錳、硒、硫、鎂、鈣、硼、鍺以及維他命A、C等。比一般植物含有更豐富的營養，我們也秉持為了讓您吃得安心，同時能百分百攝取，堅持不添加任何合成物，保持純天然、無負擔，讓您食之有味。"
  }, 
]; 

const productImage = document.getElementById("productImage");
const dotsContainer = document.getElementById("dotsContainer");
const rightTopImgtext = document.getElementById("rightTopImgtext");
// const textContainer1 = document.querySelector('.imgContent');
let currentIndex = 0; // 當前顯示的圖片索引
const prevButton = document.getElementById("leftButton");
const nextButton = document.getElementById("rightButton");

// window.onload = function () {
//   setInterval(function () {
//     currentIndex++;
//     if (currentIndex >= images.length) {
//       currentIndex = 0;
//     }
//     updateImage();
//     updateDots();
//   }, 5300);
// }
function updateImage() {
  const imageUrl = images[currentIndex].URL;
  const textContainer1 = document.getElementById("imgContent"); // 获取容器

  if (images[currentIndex].Text.trim() !== "") {
    // 文本不为空
    if (!textContainer1) {
      // 如果容器不存在，创建文本容器
      const newContainer = document.createElement("div");
      newContainer.id = "imgContent";
      newContainer.className = "imgContent";
      newContainer.textContent = images[currentIndex].Text;
      rightTopImgtext.appendChild(newContainer);
    } else {
      // 如果容器已存在，仅更新文本内容
      textContainer1.textContent = images[currentIndex].Text;
    }
  } else {
    // 文本为空，删除文本容器（如果存在）
    if (textContainer1) {
      textContainer1.remove();
    }
  }
    
    productImage.style.transform = "scale(0)"; // 先縮小
    setTimeout(function () {
      productImage.src = imageUrl; // 更新圖片
      productImage.style.transform = "scale(1)"; // 再放大
    }, 300); // 延遲300毫秒以便讓缩小動畫完成
}

function updateDots() {
  // 清空現有的指示點
  dotsContainer.innerHTML = "";
  // 重新生成dot元素
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    
    // 設置當前圖片的指示點為被點選狀態
    if (i === currentIndex) {
      dot.classList.add("active-dot");
    }

    dot.addEventListener("click", function () {
      currentIndex = i;
      updateImage();
      updateDots(); // 更新指示點狀態
    });
    // 再添加至dotsContainer
    dotsContainer.appendChild(dot);
  }
}

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1; // 如果目前是第一張，跳到最後一張
  }
  updateImage();
  updateDots();
});

nextButton.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // 如果目前是最後一張，跳到第一張
  }
  updateImage();
  updateDots();
});


// 初始化顯示第一張圖片
updateImage();
// 初始化顯示索引
updateDots();


// let isDragging = false;
// let startPosX = 0;
// let currentTranslate = 0;

// productImage.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   startPosX = e.clientX;
//   productImage.style.cursor = "grabbing";
// });

// document.addEventListener("mousemove", (e) => {
//   if (!isDragging) return;
//   const dragDistance = e.clientX - startPosX;
//   productImage.style.transform = `translateX(${currentTranslate + dragDistance}px)`;
// });

// document.addEventListener("mouseup", (e) => {
//   if (!isDragging) return;
//   isDragging = false;
//   productImage.style.cursor = "grab";

//   if (e.clientX - startPosX > 50 && currentIndex > 0) {
//     currentIndex--;
//   } else if (startPosX - e.clientX > 50 && currentIndex < images.length - 1) {
//     currentIndex++;
//   }

//   currentTranslate = -currentIndex * productImage.clientWidth;
//   productImage.style.transform = `translateX(${currentTranslate}px)`;
//   updateDots();
// });

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

//圖片全螢幕
const fullscreenButton = document.getElementById("imgContainer");
const fullscreenImage = document.getElementById("productImage");

fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    fullscreenImage.requestFullscreen()
      .catch(err => {
        console.error("不支援", err);
      });
  } else {
    document.exitFullscreen();
  }
});



