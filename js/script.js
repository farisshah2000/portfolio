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