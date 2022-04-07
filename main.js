
const hMenu = document.querySelector(".hamburger-menu");

const hBars = document.querySelector(".fa-bars");

const hTimes = document.querySelector(".fa-times");


hBars.addEventListener('click', function(){
  hMenu.classList.add ("active");
});

hTimes.addEventListener('click', function(){
  hMenu.classList.remove ("active");
});