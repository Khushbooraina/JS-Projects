//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; (i = 6); i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

//console.log(randomColor());
const startChangingColor = function () {
    setInterval(changeBgColor, 1000)
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#start').addEventListener('click', stopChangingColor);
