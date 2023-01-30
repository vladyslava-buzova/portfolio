'use strict';

const toggleBurger = document.querySelector('.burger-icon');
const closeBtn = document.querySelector('.close');
const burgerMenu = document.querySelector('.burger');

toggleBurger.addEventListener('click', function() {
  burgerMenu.classList.toggle('show-burger');
});

closeBtn.addEventListener('click', function() {
  burgerMenu.classList.remove('show-burger');
});

const logo = document.querySelector('.logo');

// --- logo ---

logo.addEventListener('click', (e) => {
  e.preventDefault();
});
