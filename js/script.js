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

const quote = '"What I cannot create, I do not understand" - Richard Feynman';
const typetext = document.getElementById("type-text");
let index = 0;
function typeEffect(){
    if (index<quote.length){
        typetext.textContent += quote.charAt(index);
        index++;
        setTimeout(typeEffect,50);
    }
}
typeEffect();

const projects = [{title:"SmartScan",description:"A desktop document scanner"},
    {title:"Rendezvous",description:"A large group coordination app"}, {title:"Sortify",description:"A spotify tool to sort songs based on desired genres"}];

const projectContainer = document.getElementById("project-container");
projects.forEach(function(project){
    const projectCard = document.createElement("div");
    projectCard.innerHTML = `<h3>${project.title}</h3>
                             <p>${project.description}</p>`;
    projectContainer.appendChild(projectCard);

});

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});
hiddenElements.forEach(function(element){
    observer.observe(element);
});
