'use strict';

const hamburgerButton = document.querySelector("#hamburger");

const header = document.querySelector("header");

let navOpen = false;

let currentPage = "home";

function createNavBar() {
    const newNavElem = document.createElement("nav");
    newNavElem.innerHTML = "<a href=\"about.html\">About Me</a><a href=\"index.html\">Home</a><a href=\"about.html\">Projects</a>";
    return newNavElem;
}
hamburgerButton.addEventListener('click', function(event) {
    if(!navOpen) {
        header.prepend(createNavBar());
        hamburgerButton.innerHTML = "<img src=\"img/close.png\" alt=\"hamburger menu\"></img>";
        navOpen = true;
    } else {
        hamburgerButton.innerHTML = "<img src=\"img/hamburger-menu.png\" alt=\"hamburger menu\"></img>";
        document.querySelector("nav").remove();
        navOpen = false;
    }
});

