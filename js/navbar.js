const menuButton = document.getElementById("menu-button");
const menuBar = document.getElementById("menu-bar");
const menuIcon = document.getElementById("menu-icon");

menuButton.addEventListener("click", () => {
    menuBar.classList.toggle("open");

    menuIcon.classList.add("icon-animation");
    menuIcon.classList.toggle("fa-xmark");
    menuIcon.classList.toggle("fa-bars");

    menuIcon.addEventListener("animationend", () => {
        menuIcon.classList.remove("icon-animation");
    });
})