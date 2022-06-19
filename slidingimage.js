let img = document.querySelector(".crauser>img");
let buttons = document.querySelectorAll(".crauser>button");
let imgNum = 0;
let imgArray = [
  "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-101-10z5145273/cover/1170x6582df54c70231d46be821e840ee96314a4.jpg",
  "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-0-1z588913/cover/1920x7702a30ca0b76504a10990a663d0c4a55d48022e00d8b3e4ca594841aa15dbed611.jpg",
  "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1920x770e8ee948eb2884f80b7a385592bd62d36.jpg",
  "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-6-3121/cover/1920x770d4490037828940bb9155a051872fb4fb.jpg",
  "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x77089a1e7be6d5e4668bdecd1a3bad12585.jpg",
  "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/cover/1920x770a9add3f2aa4745838288b4147deb1b0f.jpg",
  "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/cover/1920x77060dd64aa6ef748f48bbdf4951a1f6af7b51352ca11794ad79904fded999459e7.jpg",
];
buttons[0].addEventListener("click", function () {
  if (imgNum === 0) {
    imgNum = imgArray.length - 1;
  } else {
    imgNum--;
  }
  img.src = imgArray[imgNum];
});

buttons[0].addEventListener("click", autoSlide());
function autoSlide() {
  if (imgNum === 0) {
    imgNum = imgArray.length - 1;
  } else {
    imgNum--;
  }
  img.src = imgArray[imgNum];
}
setInterval(autoSlide, 3000);

buttons[1].addEventListener("click", function () {
  if (imgNum === imgArray.length - 1) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  img.src = imgArray[imgNum];
});
