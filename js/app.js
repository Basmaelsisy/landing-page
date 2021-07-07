// first create a function to create elements
document.body.onload = addElement();

function addElement() {

    //create first <il> tags and then add to them an ID and class names

    const one = document.createElement("li");
    one.setAttribute("id", "one");
    one.setAttribute("class", "one");

    const two = document.createElement("li");
    two.setAttribute("id", "two");
    two.setAttribute("class", "two");

    const three = document.createElement("li");
    three.setAttribute("id", "three");
    three.setAttribute("class", "three");

    const four = document.createElement("li");
    four.setAttribute("id", "four");
    four.setAttribute("class", "four");

    //create a <a> tag to each <il> tag to be easy to link between both sides and then add it to parent
    const oneA = document.createElement("a");
    oneA.textContent = 'Section One';
    one.appendChild(oneA);

    const twoA = document.createElement("a");
    twoA.textContent = 'Section Two';
    two.appendChild(twoA);

    const threeA = document.createElement("a");
    threeA.textContent = 'Section Three';
    three.appendChild(threeA);

    const fourA = document.createElement("a");
    fourA.textContent = 'Section Four';
    four.appendChild(fourA);

    //add the four <li> tags to the <ul> tag
    const container = document.getElementsByClassName('container');
    container[0].append(one, two, three, four);

}
// create function to scroll for each nav link to scroll directly to the specific section

let container = document.getElementsByClassName('container');
for(let i=0 ; i<=container.length ; i++){
  let oneB = document.getElementById('one');
  oneB.addEventListener('click', function() {
    let sec1 = document.getElementById('section1');
    sec1.scrollIntoView({
        behavior: "smooth"
    })
});
}

for(let i=0 ; i<=container.length ; i++){
  let twoB = document.getElementById('two');
  twoB.addEventListener('click', function() {
    let sec2 = document.getElementById('section2');
    sec2.scrollIntoView({
        behavior: "smooth"
    })
});
}

for(let i=0 ; i<=container.length ; i++){
  let threeB = document.getElementById('three');
  threeB.addEventListener('click', function() {
    let sec3 = document.getElementById('section3');
    sec3.scrollIntoView({
        behavior: "smooth"
    })
});
}

for(let i=0 ; i<=container.length ; i++){
  let fourB = document.getElementById('four');
  fourB.addEventListener('click', function() {
    let sec4 = document.getElementById('section4');
    sec4.scrollIntoView({
        behavior: "smooth"
    })
});
}


// add active class to the links
let buttons = document.querySelectorAll("a");
buttons.forEach((a) => {
    a.addEventListener("click", function() {
        buttons.forEach((a) => a.classList.remove("active"));
        this.classList.add("active");
    });
});

// add myStyle class to every section
let sec1 = document.getElementById('section1');
const secc = sec1.getBoundingClientRect();
console.log(secc);

function makeActive() {
    const section = document.querySelectorAll("section");
    let sec1 = document.getElementById('section1');
    const secc = sec1.getBoundingClientRect();
    if (secc.top <= 150 && secc.bottom >= 150) {
        const id = sec1.getAttribute("section1");
        sec1.classList.add("myStyle");
    } else {
        const id = sec1.getAttribute("section1");
        sec1.classList.remove("myStyle");
    }
}

document.addEventListener("scroll", function() {
    makeActive();
});

let sec2 = document.getElementById('section2');
const secc2 = sec2.getBoundingClientRect();
console.log(secc2);

function makeActive2() {
    let sec2 = document.getElementById('section2');
    const secc2 = sec2.getBoundingClientRect();

    if (secc2.top <= 200 && secc2.bottom >= 200) {
        const id = sec2.getAttribute("section2");
        sec2.classList.add("myStyle");
    } else {
        const id = sec2.getAttribute("section2");
        sec2.classList.remove("myStyle");
    }
}

document.addEventListener("scroll", function() {
    makeActive2();
});


let sec3 = document.getElementById('section3');
const secc3 = sec3.getBoundingClientRect();
console.log(secc3);

function makeActive3() {
    let sec3 = document.getElementById('section3');
    const secc3 = sec3.getBoundingClientRect();

    if (secc3.top <= 200 && secc3.bottom >= 200) {
        const id = sec3.getAttribute("section3");
        sec3.classList.add("myStyle");
    } else {
        const id = sec3.getAttribute("section3");
        sec3.classList.remove("myStyle");
    }

}
document.addEventListener("scroll", function() {
    makeActive3();
});

let sec4 = document.getElementById('section4');
const secc4 = sec4.getBoundingClientRect();
console.log(secc4);

function makeActive4() {
    let sec4 = document.getElementById('section4');
    const secc4 = sec4.getBoundingClientRect();

    if (secc4.top <= 200 && secc4.bottom >= 200) {
        const id = sec4.getAttribute("section4");
        sec4.classList.add("myStyle");
    } else {
        const id = sec4.getAttribute("section4");
        sec4.classList.remove("myStyle");
    }

}
document.addEventListener("scroll", function() {
    makeActive4();
});