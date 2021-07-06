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

const one = document.createElement("li");
one.setAttribute("id" , "one");
const oneA = document.createElement("a");
oneA.textContent='Section One';
one.appendChild(oneA);

const two = document.createElement("li");
two.setAttribute("id","two");
const twoA = document.createElement("a");
twoA.textContent='Section Two';
two.appendChild(twoA);

const three = document.createElement("li");
three.setAttribute("id","three");
const threeA = document.createElement("a");
threeA.textContent='Section Three';
three.appendChild(threeA);

const four = document.createElement("li");
four.setAttribute("id" , "four");
const fourA = document.createElement("a");
fourA.textContent='Section Four';
four.appendChild(fourA);

const container = document.getElementsByClassName('container');
container[0].append(one , two , three , four);

}

let oneB = document.getElementById('one');

oneB.addEventListener('click', function () {
    let sec = document.getElementById('section1');
    sec.scrollIntoView({ behavior: "smooth" })
 });


let buttons = document.querySelectorAll("a");
buttons.forEach((a) => {
    a.addEventListener("click", function () {
        buttons.forEach((a) => a.classList.remove("active"));
        this.classList.add("active");
    });
});
