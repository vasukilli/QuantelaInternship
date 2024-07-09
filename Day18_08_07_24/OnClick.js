let btn1 = document.querySelector("#btn1");
let currentMode = "light";
btn1.addEventListener("click" , ()=>{
    if(currentMode === "dark"){
        currentMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "red";

    }else{
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
    }
});