let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let button = document.querySelector('button');

button.addEventListener('click', func1);

function func1() {
  img3.classList.add('imgsmena');
  console.log('func1: img3.add');
}
function func2() {
  img2.classList.add('imgsmena');
  console.log('func2: img2.add');
}
function func3() {
  img3.classList.remove('imgsmena');
  console.log('func3: img3.remove');
}

function func4() {
  img2.classList.remove('imgsmena');
  console.log('func4: img2.remove');
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



//setInterval(func2, 6000);