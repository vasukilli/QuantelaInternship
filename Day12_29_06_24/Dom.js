// let paragraphs = document.querySelectorAll("p");//4
// console.dir(paragraphs);

// //alert(paragraphs[0].nodeName);
// console.log(paragraphs[0].innerText);

const myFunction1 = () =>{
    let heading = document.createElement("h1");
    let headingText = document.createTextNode("I am vasudeva rao killi");
    heading.appendChild(headingText);
    document.body.appendChild(heading);
};
const myFunction2 = () =>{
    let paraElement = document.createElement("p");
    let paragraph = document.createTextNode("This is my background data , i am from ComputerSciences student");
    paraElement.appendChild(paragraph);
    document.body.appendChild(paraElement);
}
// myFunction1();
// myFunction2();

const story = document.querySelector(".story");
const setText = document.querySelector("#set-txt");
setText.addEventListener("click",() => {
       story.textContent = "I am vasudeva rao killi from quantela";
});
const clearText = document.querySelector("#clear-txt");
clearText.addEventListener("click",() =>{
    story.textContent = "";
});
