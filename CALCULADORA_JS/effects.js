const display = document.getElementById("display");

function pressNumber(button) {
  button.style.opacity = 0.5;
  setTimeout(() => {
    button.style.opacity = 1;
    display.textContent += button.textContent;
  }, 100);
}

function pressOperator(button) {
  button.style.opacity = 0.5;
  setTimeout(() => {
    button.style.opacity = 1;
    display.textContent += button.textContent;
  }, 100);
}

function clearDisplay() {
  display.textContent = "0";
}


