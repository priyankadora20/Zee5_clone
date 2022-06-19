let movies1 = [
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-4z5145215/portrait/1920x770a9add3f2aa4745838288b4147deb1b0f.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-1298/portrait/1920x770d9ead07e5b304a989d85cf8c6e0113fb.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-4z587408/portrait/1920x770195db875fe204fa4afe115764b5dc00ba004028948aa4211b107faed649301d7.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-4z596111/portrait/1920x7709fcbdd4c78184b51aadd7e2e34396dbf.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-2356/portrait/1920x770ffdfc616c75840cf95545cd67e3476d6e2fb2ce4623c4ebaa29b36ba97edf983.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-6-3064/portrait/1920x770f6f1d5315e9145808275b6b69e6572f7.jpg",
  },
];

let movies2 = [
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5161064/portrait/1920x770929392103701486dab6b619dd2a814033853ebe54fd04914b0e00d20da05e23a.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-101-10z5145273/portrait/1920x770681eb40058c046b7927bea554484d07f.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5133458/portrait/1920x77060dd64aa6ef748f48bbdf4951a1f6af7b51352ca11794ad79904fded999459e7.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5146416/portrait/1920x77030295e51fe54452d8c85e76c5ec756e8.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5149852/portrait/1920x770e8feb74f37634acfbaed7c515c3d7439.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5148935/portrait/1920x770ea4b4ed358824163a009717b04978419802bc3eabf62498685faf98fb8817e0a.jpg",
  },
];

let movies3 = [
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco/resources/0-1-6z5162226/list/000001292fb2c16bd2e44a188a337b55e163e4c5.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco/resources/0-1-6z5162376/list/000004622c92e778f17042b2b006d72960d54620.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco/resources/0-1-6z5162348/list/000002166e6e0e4cd2b9444ea38d9f2eeea01094.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco/resources/0-1-6z5165101/list/DanceIndiaDanceLilMastersSeason5June182022Webisode092819914f8649c2b0033d79aa77d7b5.jpg",
  },
  {
    img2: "https://akamaividz2.zee5.com/image/upload/w_407,h_229,c_scale,f_webp,q_auto:eco/resources/0-1-6z5162100/list/00000415a5de03f03ab442ad9d305b0703276bbc.jpg",
  },
];

movies1.forEach(function (elem) {
  let box1 = document.createElement("div");
  box1.setAttribute("class", "box_1");

  img2 = document.createElement("img");
  img2.setAttribute("class", "img2");
  img2.setAttribute("src", elem.img2);

  document.querySelector("#container").append(box1);

  box1.append(img2);
  //    let but=document.createElement(button);
  //    but.innerText="play"
  //    box1.append(but)
  //    document.querySelector(".box_1").append(but)
});

movies2.forEach(function (elem) {
  let box1 = document.createElement("div");
  box1.setAttribute("class", "box_1");

  img2 = document.createElement("img");
  img2.setAttribute("class", "img2");
  img2.setAttribute("src", elem.img2);

  document.querySelector("#container2").append(box1);

  box1.append(img2);
});

movies3.forEach(function (elem) {
  let box1 = document.createElement("div");
  box1.setAttribute("class", "box_1");

  img2 = document.createElement("img");
  img2.setAttribute("class", "img2");
  img2.setAttribute("src", elem.img2);

  document.querySelector("#container3").append(box1);

  box1.append(img2);
});
