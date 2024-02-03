

const sideNav = document.querySelector('.sideNav ');
const overlay = document.querySelector('.overlay ');


const listButton = document.querySelector('.container .list');
listButton.onclick= function(){
  sideNav.classList.toggle('hideNav');
  sideNav.classList.toggle('showNav');
  overlay.classList.toggle('showOverlay');
  
}

const hideButton = document.querySelector('.sideNav .head .x');
hideButton.onclick= function(){
  sideNav.classList.toggle('hideNav');
  sideNav.classList.toggle('showNav');
  overlay.classList.toggle('showOverlay');

}