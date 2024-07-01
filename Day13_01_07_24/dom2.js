const colorChange = (newColor) =>{
    let para = document.getElementById("para");
    para.style.color = newColor;
}
let para = document.getElementsByClassName("p");//0,1,2,3
console.dir(para);

let parentDOM = document.getElementById("div1");0,1,2,3
let test = parentDOM.getElementsByClassName("test");
console.log(test);
let targetDom = document.getElementsByClassName("test")[1];
console.log(targetDom);