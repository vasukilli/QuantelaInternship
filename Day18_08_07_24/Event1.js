let mode = document.querySelector("#mode");
let modeChange = "light";
let body = document.querySelector("body");
mode.addEventListener("click", ()=>{
        
        if(modeChange === "light"){
            modeChange = "dark";
           body.style.backgroundColor = "black"; 
           body.style.color="white";
        // body.classList.add("dark");
        // body.classList.remove("light");
        }else{
            modeChange = "light";
           document.querySelector("body").style.backgroundColor = "white";
           document.querySelector("body").style.color = "black";
        // body.classList.add("light");
        // body.classList.remove("dark");
        }
});