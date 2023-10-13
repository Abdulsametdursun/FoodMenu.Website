import { renderMenuItems, renderButtons } from "./scripts/ui.js";
const menuList = document.querySelector("#menu-list");
const buttonsArea = document.getElementById("buttons");

//! Monitoring the page as when loads
document.addEventListener("DOMContentLoaded", () => {
  fetchMenu();
  renderButtons();
});

// Describing data in global scope
let data;

// Pulls menu data from json file
async function fetchMenu() {
  const res = await fetch("./db.json");
  data = await res.json();
  renderMenuItems(data.menu, menuList);
}

// Identifying the button that was clicked
buttonsArea.addEventListener("click", (e) => {
  if (e.target.id !== "buttons") {
    renderButtons(e.target.innerText);
    // Access selected category
    const selected = e.target.dataset.category;

    if (selected === "all") {
      // Dont filter print all
      renderMenuItems(data.menu, menuList);
    } else {
      // Make filter
      const filtred = data.menu.filter((i) => i.category === selected);
      // Print filtered items
      renderMenuItems(filtred, menuList);
    }
  }
});
