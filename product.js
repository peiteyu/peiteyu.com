const images = ["葵地淇DMpage (1).png", "葵地淇DMpage (2).png", "葵地淇DMpage (3).png","葵地淇DMpage (4).png","葵地淇DMpage (5).png"]; // 图片文件名数组
let currentIndex = 0; // 当前显示的图片索引
const productImage = document.getElementById("productImage");
const dotsContainer = document.getElementById("dotsContainer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// function updateImage() {
//   const imageUrl = images[currentIndex];
//   productImage.src = imageUrl;
// }

function updateImage() {
    const imageUrl = images[currentIndex];
    productImage.style.transform = "scale(0)"; // 先缩小
    setTimeout(function () {
      productImage.src = imageUrl; // 更新图片
      productImage.style.transform = "scale(1)"; // 再放大
    }, 300); // 延迟300毫秒以便让缩小动画完成
}

function updateDots() {
    dotsContainer.innerHTML = ""; // 清空之前的指示点
    for (let i = 0; i < images.length; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === currentIndex) {
        dot.classList.add("active-dot"); // 高亮显示当前图片的指示点
      }
      dot.addEventListener("click", function () {
        currentIndex = i;
        updateImage();
      });
      dotsContainer.appendChild(dot);
    }
}

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
});

nextButton.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
});


// 初始化显示第一张图片
updateImage();


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
