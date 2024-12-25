let hamburger = document.getElementById("hamburger"); 
console.log(hamburger); 
const body = document.querySelector('body'); 
console.log(body); 

const nav = document.getElementsByClassName('navigation'); 

hamburger.addEventListener("click",()=>{
    body.classList.add('utility');
    body.classList.remove('reverse'); 
}); 


body.addEventListener("click",()=>{
    nav.classList.add("reverse"); 
}); 

