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
let buttons = document.querySelectorAll('a');
buttons.forEach( a => {
  a.addEventListener('click', function(){
    buttons.forEach(a => a.classList.remove('active'));
    this.classList.add('active');
  });
});
const content = document.getElementsByClassName("content");
content(function(){
   content(".nav__menu a").on('click', function(){
     content("html,body").animate({
       scrollTop: content(content.attr(this,'href')).offset().top},100000);
     });
    });