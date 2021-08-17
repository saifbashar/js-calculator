const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const display = document.getElementById('display');
const displaySum = document.getElementById('displaySum');

function liveScreen(value) {
  let result = 0;
  if (display.innerText[0] == '0') {
    display.innerText = '';
  }
  display.innerText += value;
}

equal.addEventListener('click', function () {
  if (display.innerText == '') {
    displaySum.innerText = 0;
    display.innerText = 0;
  } else {
    displaySum.innerText = eval(display.innerText);
    display.innerText = '';
  }
});

clear.addEventListener('click', function () {
  display.innerText = 0;
});
