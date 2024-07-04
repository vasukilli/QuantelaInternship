debugger;
const parentDom = document.querySelector("id1");
const childSpan = parentDom.querySelectorAll("span");
childSpan.forEach((item) =>{
    item.classList.add("red");
});
let span = document.getElementById("id1");
console.log(span.tagName);
let img = document.querySelector("#img1");
console.log(img.tagName);

const sourceCont = document.getElementById("source");
const innerTxt = document.getElementById("innerText");
const textContent = document.getElementById("textcontent");
innerTxt.value = sourceCont.innerText;
textContent.value = sourceCont.textContent;