"use strict";

const monkey = document.querySelector(".monkey");

document.onmousemove = (event) => {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  monkey.style.transition = "0s";
  monkey.style.left = x;
  monkey.style.top = y;
};
document.onmouseout = (event) => {
  monkey.style.transition = "0.7s";
  monkey.style.left = "50%";
  monkey.style.top = "50%";
};
