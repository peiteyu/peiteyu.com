const images = ["葵地淇DMpage (1).png", "葵地淇DMpage (2).png", "葵地淇DMpage (3).png","葵地淇DMpage (4).png","葵地淇DMpage (5).png"]; // 图片文件名数组
let currentIndex = 0; // 當前顯示的圖片索引
const productImage = document.getElementById("productImage");
const dotsContainer = document.getElementById("dotsContainer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function updateImage() {
    const imageUrl = images[currentIndex];
    productImage.style.transform = "scale(0)"; // 先縮小
    setTimeout(function () {
      productImage.src = imageUrl; // 更新圖片
      productImage.style.transform = "scale(1)"; // 再放大
    }, 300); // 延遲300毫秒以便让缩小动画完成
}

function updateDots() {
  // 清空現有的指示点
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

// prevButton.addEventListener("click", function () {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateImage();
//   }
// });

// nextButton.addEventListener("click", function () {
//   if (currentIndex < images.length - 1) {
//     currentIndex++;
//     updateImage();
//   }
// });


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