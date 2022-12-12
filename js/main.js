'use strict';

const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav__list');
const link = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
  menu.classList.toggle('nav__list--active');
  burger.classList.toggle('hamburger--active');
});

link.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.toggle('nav__list--active');
    burger.classList.toggle('hamburger--active');
  });
});
