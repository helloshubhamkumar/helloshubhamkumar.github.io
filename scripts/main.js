function random(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

function changeColor() {
    count++;
    const rndColor = `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
    document.body.style.backgroundColor = rndColor;
    if (count === 10) {
      clearInterval(interval);
    }
  
}

let count = 0;
let interval = setInterval(changeColor, 150);


