const input = document.querySelector(".input");
const Btn1 = document.querySelector(".btn1");
const Btn2 = document.querySelector(".btn2");
const Btn3 = document.querySelector(".btn3");
const output = document.querySelector(".output");


var size1 = 34;
function clickBtn1() {
    input.style.fontSize = size1 + "px";
}

var size2 = 32;
function clickBtn2() {
    input.style.fontSize = size2 + "px";
}

var size3 = 30;
function clickBtn3() {
    input.style.fontSize = size3 + "px";
}

Btn1.addEventListener("click", clickBtn1);
Btn2.addEventListener("click", clickBtn2);
Btn3.addEventListener("click", clickBtn3);