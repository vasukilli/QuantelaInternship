let x = 0;
let arr = [];

function addingNum(){
arr[x]= document.getElementById("text1").value;
 alert("element :" + arr[x] +" added at " + x);
 x++;
 document.getElementById("text1").value = '';
}
function displayData(){
    let str = "";
    for(let y=0 ; y<arr.length ; y++){
        str = str + "Element :" + y + " = " + arr[y] +"<br>";
    }
    document.getElementById("result").innerHTML = str;
}

