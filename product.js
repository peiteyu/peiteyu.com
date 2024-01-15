// 圖片文件名數組
const images = [
  {
    URL:"葵地淇DMpage (2).png", 
    Text1:"",
    Text2:""
  }, 
  {
    URL:"葵地淇DMpage (3).png", 
    Text1:"有90%以上都是發炎所引起的病痛，只要發炎，身體就會陷入低落的修復機能狀態，讓我們更容易生病。",
    Text2:"山葵蘿蔔硫素(異硫氰酸6-亞磺醯基6-MSITC)，具有抑制活性氧產生的「抗氧化作用」、「抗血小板凝集作用」等特性。"
  }, 
]; 

const productImage = document.getElementById("productImage");
const dotsContainer = document.getElementById("dotsContainer");

const rightTopImgtext = document.getElementById("rightTopImgtext");
const rightbottomImgtext = document.getElementById("rightbottomImgtext");
// const textContainer1 = document.querySelector('.imgContent');
let currentIndex = 0; // 當前顯示的圖片索引
const prevButton = document.getElementById("leftButton");
const nextButton = document.getElementById("rightButton");

function updateImage() {
  const text1 = images[currentIndex].Text1 !== undefined ? images[currentIndex].Text1.trim() : "";
  const text2 = images[currentIndex].Text2.trim();
  const imageUrl = images[currentIndex].URL;
  const textContainer1 = document.getElementById("imgContent1"); // 获取容器
  const textContainer2 = document.getElementById("imgContent2"); // 获取容器

  if (text1 !== "" || text2 !== "") {
    // 文字不為空
    if (!textContainer1) {
      // 如果容器不存在，创建文本容器
      const newContainer1 = document.createElement("div");
      newContainer1.id = "imgContent1";
      newContainer1.className = "imgContent1";
      newContainer1.textContent = images[currentIndex].Text1;
      rightTopImgtext.appendChild(newContainer1);

      const newContainer2 = document.createElement("div");
      newContainer2.id = "imgContent2";
      newContainer2.className = "imgContent2";
      newContainer2.textContent = images[currentIndex].Text2;
      rightTopImgtext.appendChild(newContainer2);
    } else {
      // 如果容器已存在，仅更新文本内容
      textContainer1.textContent = images[currentIndex].Text1;
      textContainer2.textContent = images[currentIndex].Text2;
    }
  } else {
    // 文本为空，删除文本容器（如果存在）
    if (textContainer1) {
      textContainer1.remove();
    }
    if (textContainer2) {
      textContainer2.remove();
    }
  }
    
    productImage.style.transform = "scale(0)"; // 先縮小
    setTimeout(function () {
      productImage.src = imageUrl; // 更新圖片
      productImage.style.transform = "scale(1)"; // 再放大
    }, 300); // 延遲300毫秒以便讓缩小動畫完成
}

// 我發現如果當我切換圖片時，原本圖片有四張，第二到第四張內容內容都一樣，但第二張容器textContainer1、textContainer2內的文字都會出現，當切換到下一張時，textContainer1不見，剩下textContainer2，但我的陣列中Text1跟Text2都有文字

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

const listItems = document.querySelectorAll('li');
let delay = 0;
window.addEventListener('load', function() {   
    listItems.forEach(item => {
      setTimeout(() => {
        item.style.opacity = '1';
      }, delay);
      delay += 200; // 延遲每個項目的顯示時間
    });
});

