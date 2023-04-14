'use strict'

const inputFieled = document.querySelector('#searchname');
const imagesParent = document.querySelectorAll('.image-box');

inputFieled.addEventListener('keyup', (event) => {
const userInput = event.target.value.toLowerCase();

imagesParent.forEach((element) => {
  if (element.querySelector('p').textContent.toLowerCase().includes(userInput) === true) 
  {
    element.style.display = 'block';
    element.addEventListener('click', () => {
      element.classList.add('selected');
    });
  }
  else {
    element.style.display = 'none'
  }

  if (userInput === '') {
    element.classList.remove('selected');
  }
})


});





// imagesParent.forEach(element => {
//   element.querySelector('p').textContent.toLowerCase().includes(userInput) ? element.style.display = 'block' : element.style.display = 'none';
//   })


// imagesParent.forEach((element) => {
//   if (element.querySelector('p').textContent.toLowerCase().includes(userInput)) 
//   {
//     element.style.display = 'block';
//     element.classList.add('selected');
//   } else {
//     element.style.display = 'none'
//   }
// })