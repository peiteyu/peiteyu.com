const videoOpen = document.querySelector('.click-show-video');
const videoBox = document.querySelector('.video-open')
videoOpen.addEventListener('click',function(){
    if(videoBox.classList.contains("active")){
        videoBox.classList.remove("active");
    }
    else{
        videoBox.classList.add("active");
    }
    
})