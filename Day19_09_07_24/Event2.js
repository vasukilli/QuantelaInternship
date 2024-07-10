// Write a JavaScript program that creates a button and add a click 
// event listener to log a message when it's clicked.
//debugger;
let button = document.createElement("button");
button.innerText = "clcik me!";
button.addEventListener("click" , ()=>{
      alert("It is clciked!");
});
document.body.appendChild(button);