/**
 * Using a built-in js class to manage search parameters in the url
 * URLSearchParams
 */
const params = new URLSearchParams(location.search);

//* We accessed the parameter with the get method provided by the js class.
const paramId = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  // Get item from API
  const res = await fetch("../db.json");
  const data = await res.json();

  // Finding the item corresponding to the id in the URL
  const product = data.menu.find((i) => i.id === Number(paramId));
  renderPage(product);
});

// div to send interface
const outlet = document.querySelector("#outlet");

// Print all interface to screen
function renderPage(product) {
  outlet.innerHTML = `
  <div class="d-flex justify-content-between fs-5">
        <a href="/">
          <i class="bi bi-house-door-fill"></i>
        </a>
        <div class="link"> main page / ${
          product.category
        } / ${product.title.toLowerCase()}</div>
      </div>

      <h1 class="text-center my-3 shadow rounded p-2">${product.title}</h1>
      
      <img
        src="${product.img}"
        class="rounded object-fit-cover shadow-lg"
        style="max-height: 400px"
      />

        <h3 class="mt-4">
          Item Category: <span class="text-success">${product.category}</span>
        </h3>

        <h3 class="my-2">
          Item Price: <span class="text-success">${product.price}</span>
        </h3>

      <p class="lead fs-3">
        ${product.desc}
      </p>`;
}
