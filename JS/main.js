// const add = document.querySelector(".add ");
// const subtract = document.querySelector(".subtract");
// const resetCount = document.querySelector(".reset");
const count = document.querySelector(".count ");
const buttons = document.querySelector(".buttons")



/* 1st method of assigning event-listeners to each button */ 

// add.addEventListener("click", () => {
//   count.innerHTML++;
// });

// subtract.addEventListener("click", () => { 
//   count.innerHTML--;
// });

// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });



/** 2nd method using event delegation(assign an EL to the parent div and target the children within) */

buttons.addEventListener("click", (e) => {
  if(e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor()
  }
  if(e.target.classList.contains("subtract")) {
      count.innerHTML--;
      setColor()

  }
  if(e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor()
  }
});

function setColor() {
    if (count.innerHTML < 0) {
        count.style.color = 'red';
    } else if(count.innerHTML > 0) {
        count.style.color = 'yellow';
    } else {
        count.style.color = 'gray';
    }
}