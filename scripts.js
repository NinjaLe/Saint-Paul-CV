let button1 = document.querySelector('#button1');
let button2 = document.querySelector("#button2");
let fromHeaven = document.querySelector('.fromHeaven');
let stpaulfight = document.querySelector('.stpaulfight');
let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
const firstOpen = () => {

    one.style.display = "none";
    fromHeaven.style.display = "flex";
    screen1.appendChild(fromHeaven);


}

const secondOpen = () => {

    two.style.display = "none";
    stpaulfight.style.display = "flex";
    screen2.appendChild(stpaulfight);
}

button1.addEventListener('click', firstOpen);
button2.addEventListener('click', secondOpen);