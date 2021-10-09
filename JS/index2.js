let contentBoth = document.querySelector('.content_both');
let bottonContentBoth = document.querySelector('.botton_content_both');
let headerFixed = document.querySelector('.header');
let headerImage = document.querySelector('.slider');
let imgZ = document.querySelectorAll('.imgZ');


bottonContentBoth.addEventListener('click', contentHeight);
window.addEventListener('scroll', () => {
  //console.log(document.body.scrollTop());
  if (window.pageYOffset > 40) {
    headerFixed.classList.add('fixed');
    headerImage.style.marginTop = "110px";
  } else {
    headerFixed.classList.remove('fixed');
    headerImage.style.marginTop = "0";
  }
});

let heig = true;
function contentHeight() {
  if (heig) {
    contentBoth.style.height = contentBoth.scrollHeight + 40 + 'px';
    heig = false;
  } else {
    contentBoth.style.height = '0px';
    heig = true;
  }
}

let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let button = document.querySelector('button');

button.addEventListener('click', func1);

function func1() {
  img3.classList.add('imgsmena');
  imgZ[1].classList.add('imgZ_active');
  imgZ[0].classList.remove('imgZ1');
  // console.log('func1: img3.add');
}
function func2() {
  img2.classList.add('imgsmena');
  imgZ[2].classList.add('imgZ_active');
  imgZ[1].classList.remove('imgZ_active');
  //console.log('func2: img2.add');
}
function func3() {
  img3.classList.remove('imgsmena');
  imgZ[0].classList.add('imgZ1');
  imgZ[2].classList.remove('imgZ_active');
  //console.log('func3: img3.remove');
}

function func4() {
  img2.classList.remove('imgsmena');

  //console.log('func4: img2.remove');
}

// function func2() {
//   img1.classList.add('imgsmena2');
// }

function setsTimeouts() {
  setTimeout(func1, 4000);

  setTimeout(func2, 8000);
  //вернуть фотки на место сняв opacity в 0;
  setTimeout(func3, 12000);
  setTimeout(func4, 13000);
}
setTimeout(func1, 4000);

setTimeout(func2, 8000);
//вернуть фотки на место сняв opacity в 0;
setTimeout(func3, 12000);
setTimeout(func4, 13000);
// function funcSet(){
setInterval(setsTimeouts, 12000);

//}

