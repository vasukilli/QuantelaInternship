let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) =>{
    // let a = 30;
    // let b = 40;
    // alert(`The sum of numbers a + b is ${a+b}`);
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,clientY);
}
let btn2 = document.createElement("button");
btn2.innerHTML = "Tap me!";
document.body.appendChild(btn2);
btn2.ondblclick = () =>{
    let a = 20;
    let b = 10;
    alert(`The substraction of a - b is ${a-b}`);
}
let over1 = document.querySelector("#over1");
over1.onmouseover = () =>{
    alert("you are inside a div");
}
