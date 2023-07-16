// toogle class active
const navbarNav = document.querySelector(".navbar-nav");

// ham-menu on-click
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// exit sidebar from everywhere
const hamMenu = document.querySelector("#ham-menu");

document.addEventListener("click", (e) => {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
