const display = document.getElementById("display");

export function updateDisplay(value) {
  display.textContent = value;
}

export function appendToDisplay(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

export function getDisplay() {
  return display.textContent;
}