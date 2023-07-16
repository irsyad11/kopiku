// toogle class active menu
const navbarNav = document.querySelector(".navbar-nav");

// ham-menu on-click
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toogle search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// Search menu activation mode
document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle Shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

// Shopping cart on click
document.querySelector("#cart-btn").onclick = (e) => {
  shoppingCart.classList.toggle("active");
};

// Show product modal detial
const modalProduct = document.querySelector("#item-detail-modal");
const productDetailBtn = document.querySelectorAll(".item-detail-btn");
const modalClose = document.querySelector(".modal-close-btn");

console.log(productDetailBtn);
productDetailBtn.forEach((btn) => {
  console.log(btn);
  btn.onclick = (e) => {
    modalProduct.style.display = "flex";
    e.preventDefault();
  };
});

modalClose.onclick = (e) => {
  modalProduct.style.display = "none";
  e.preventDefault();
};

// exit from click from everywhere
const hamMenu = document.querySelector("#ham-menu");
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");

// if (modalProduct.style.display == "flex") {
//   modalProduct.addEventListener("click", (e) => {
//     if (!modalContainer.contains(e.target)) {
//       modalProduct.style.display = "none";
//     }
//   });
// }
window.onclick = (e) => {
  if (e.target === modalProduct) {
    modalProduct.style.display = "none";
  }
};

document.addEventListener("click", (e) => {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shoppingCart.contains(e.target) && !cartBtn.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
