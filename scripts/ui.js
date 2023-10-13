import { buttonData } from "./constants.js";
const buttonArea = document.getElementById("buttons");

// Prints menu items to the screen
export function renderMenuItems(menuItems, menuList) {
  // Creates a menu HTML for each element in the array and prints it to the screen
  menuList.innerHTML = menuItems
    .map(
      (item) => `
        <a id="cart" href="/detail.html?id=${
          item.id
        }" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
          <img 
            class="rounded shadow img-fluid" 
            src="${item.img}" 
          />
          <div>
            <div class="d-flex justify-content-between">
              <h5>${item.title}</h5>
              <p class="text-success fw-bold">$${item.price}</p>
            </div>
            <p class="lead">
              ${item.desc.slice(0, 80) + "..."}
            </p>
          </div>
        </a>
      `
    )
    .join("");
}

// Prints buttons to the screen
export function renderButtons(active) {
  // Clear old buttons that not clicked
  buttonArea.innerHTML = "";

  // Creat new buttons
  buttonData.forEach((btn) => {
    const buttonEle = document.createElement("button");
    buttonEle.className = "btn btn-outline-dark";

    // Data-id to be determine
    buttonEle.dataset.category = btn.value;

    // if class is active change color
    if (btn.text === active) {
      buttonEle.classList.add("btn-dark", "text-white");
    }
    buttonEle.innerText = btn.text;
    buttonArea.appendChild(buttonEle);
  });
}
