/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// first i started with creating <li> tags in <ul> in nav_menu
document.body.onload = addElement;
function addElement(){

const one = document.createElement('li');
const newOne = document.createTextNode("Section One");
one.appendChild(newOne);

const two = document.createElement('li');
const newTwo = document.createTextNode("Section Two");
two.appendChild(newTwo);

const three = document.createElement('li');
const newThree = document.createTextNode("Section Three");
three.appendChild(newThree);

const four = document.createElement('li');
const newFour = document.createTextNode("Section Four");
four.appendChild(newFour);

const container = document.getElementsByClassName('nav__menu');
container.appendChild(one,two,three,four);

}

let con = document.getElementsByClassName("content");
function scrollBy() {
    con.scrollIntoView();}

let buttons = document.querySelectorAll("a");
buttons.forEach((a) => {
    a.addEventListener("click", function () {
        buttons.forEach((a) => a.classList.remove("active"));
        this.classList.add("active");
    });
});
