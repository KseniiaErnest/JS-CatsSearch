'use strict'

const inputFieled = document.querySelector('#searchname');
const imagesParent = document.querySelectorAll('.image-box');

inputFieled.addEventListener('keyup', (event) => {
const userInput = event.target.value.toLowerCase();

imagesParent.forEach(element => {
  element.querySelector('p').textContent.toLowerCase().includes(userInput) ? element.style.display = 'block' : element.style.display = 'none';
  })
})