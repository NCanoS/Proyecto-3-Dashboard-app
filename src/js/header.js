const navToggle = document.querySelector(".nav-toggle");
const menuList = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
    menuList.classList.toggle("navbar_visible");
});