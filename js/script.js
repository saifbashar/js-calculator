const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const display = document.getElementById('display');
const displaySum = document.getElementById('displaySum');
const theme = document.getElementById('theme');
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
  displaySum.innerText = 0;
});
function changeTheme() {
  if (theme.getAttribute('href') == './style/style.css') {
    theme.setAttribute('href', './style/dark.css');
    document.getElementById('dark').innerText = 'Light Mode';
  } else {
    theme.setAttribute('href', './style/style.css');
    document.getElementById('dark').innerText = 'Dark Mode';
  }
}
