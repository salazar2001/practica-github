import { appendToDisplay } from "./display.js";
import {
  clearDisplay, deleteLast, calculate,
  squareRoot, power2, inverse
} from "./operations.js";

export function setupButtons() {
  document.querySelectorAll("button").forEach(btn => {
    const value = btn.dataset.value;
    const action = btn.dataset.action;

    if (value) {
      btn.addEventListener("click", () => appendToDisplay(value));
    }

    if (action) {
      btn.addEventListener("click", () => {
        switch (action) {
          case "clear": return clearDisplay();
          case "delete": return deleteLast();
          case "equal": return calculate();
          case "sqrt": return squareRoot();
          case "power": return power2();
          case "inverse": return inverse();
        }
      });
    }
  });
}