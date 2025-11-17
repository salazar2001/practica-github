import { getDisplay, updateDisplay } from "./display.js";

export function clearDisplay() {
  updateDisplay("0");
}

export function deleteLast() {
  const current = getDisplay();
  updateDisplay(current.length > 1 ? current.slice(0, -1) : "0");
}

export function calculate() {
  try {
    const result = eval(getDisplay());
    updateDisplay(result);
  } catch {
    updateDisplay("Error");
  }
}

export function squareRoot() {
  const n = parseFloat(getDisplay());
  updateDisplay(Math.sqrt(n));
}

export function power2() {
  const n = parseFloat(getDisplay());
  updateDisplay(n * n);
}

export function inverse() {
  const n = parseFloat(getDisplay());
  if (n === 0) return updateDisplay("Error");
  updateDisplay(1 / n);
}
