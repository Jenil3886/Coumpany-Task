let display = document.getElementById('display');

display.value = '0';

function appendToDisplay(value) {
  if (display.value === '0' && (value === '.' || !isNaN(value))) {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/','%','Enter','Backspace','Escape'];

  if (allowedKeys.includes(key)) {
    event.preventDefault();
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
      clearDisplay();
    } else {
      appendToDisplay(key);
    }
  }
});
