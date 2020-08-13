// const button = document.querySelector('button');
// const body = document.querySelector('body');
// const colors = ['red', 'green', 'blue', 'yellow']

// body.style.backgroundColor = 'violet';
// button.addEventListener('click', changeBackground);

// function changeBackground(){
//   const colorIndex = parseInt(Math.random()*colors.length);
//   body.style.backgroundColor = colors[colorIndex];
// }


const button = document.querySelector('button');
const body = document.querySelector('body');
const foto = ["url('./img/foto2.jpg')", "url('./img/foto3.jpg')", "url('./img/foto1.jpg')", "url('./img/foto4.jpg')", "url('./img/foto5.jpg')", "url('./img/foto6.jpg')", "url('./img/foto7.jpg')", "url('./img/foto8.jpg')"];

body.style.backgroundImage = "url('./img/foto1.jpg')";
button.addEventListener('click', changeBackground);


function changeBackground(){
  const colorIndex = parseInt(Math.random()*foto.length);
  body.style.backgroundImage = foto[colorIndex];
}

