document.body.onload = addData();
function addData(){
    const createEl = document.createElement("h2");
    const createTxt = document.createTextNode("Hi i am here !!..");
    createEl.appendChild(createTxt);
    const presentTxt = document.getElementById("tst");
    document.body.insertBefore(createEl,presentTxt);
}
const butn1 = document.createElement("button");
butn1.innerText = "appendBtn";

let div = document.getElementById("div1");
div.append(butn1);

let butn2 = document.createElement("button");
butn2.innerText = "prependBtn";

div.prepend(butn2);

let butn3 = document.createElement("button");
butn3.innerText = "beforeBtn";

div.before(butn3);

let butn4 = document.createElement("button");
butn4.innerText = "AfterBtn";

div.before(butn4);

