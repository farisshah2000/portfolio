const themeButton = document.getElementById("theme-button");
themeButton.textContent = "Dark Mode";
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (themeButton.textContent == "Dark Mode"){
        themeButton.textContent = "Light Mode";
    }
    else{
        themeButton.textContent = "Dark Mode";
    }

});

const hamburgerButton = document.getElementById("hamburger-menu");
const navLinks = document.querySelector("nav ul");
hamburgerButton.addEventListener("click", function(){
    navLinks.classList.toggle("show");

});