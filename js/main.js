// jsを記述する際はここに記載していく
const img_src = ["img/main.jpg", "img/main2.jpg"];
let num = -1;

function slide_time() {
  if (num === 1) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide_img").src = img_src[num];
}

setInterval(slide_time, 2500);