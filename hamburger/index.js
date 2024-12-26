const hamburger = document.getElementById('hamburger');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  body.classList.toggle('utility'); 
});

body.addEventListener('click', (event) => {
  if (event.target !== hamburger) { 
    body.classList.remove('utility'); 
  }
});