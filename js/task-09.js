const buttonEl = document.querySelector(".change-color");
// const buttonChangeColorEl =  buttonEl.style.backgroundColor;
// buttonEl.style.backgroundColor = "blue";
 $color = getRandomHexColor(); 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
   
}

 buttonEl.addEventListener("click", $color );

