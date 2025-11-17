import { setupButtons } from "./modules/buttons.js";

setupButtons();

// Modo oscuro
const toggleBtn = document.getElementById("darkmode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
