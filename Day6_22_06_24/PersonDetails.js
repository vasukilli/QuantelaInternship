function validateName(){
    let sName = document.getElementById("nameInp").value;
    const sSpecialChar = /[`!@#$%^&*()_\+\-=[\]{};':"\\|,.<>/?~123456789]/;
    if(sSpecialChar.test(sName)){
        alert("Special characters are not allowed");
    }else{
         return sName;
    }
}
function validatePhoneNumber(){
    //debugger;
    let sPhoneNumber = document.getElementById("phoneInp").value;
    const sDigits = /[0-9]/;
    if(sDigits.test(sPhoneNumber)){
        //document.getElementById("phoneInp").value = "";
        return sPhoneNumber;
    }else{
        document.getElementById("phoneInp").value = "";
    }
}
function validateAddress(){
    let sAddress = document.getElementById("addInp").value;
    const sRegex =  /^[a-zA-Z0-9,/-]*$/;
    //const sSpecialChar = /[`!@#$%^&*()_\+\=[\]{};':"\\|.<>?~]/;
    if(sRegex.test(sAddress)){
         return sAddress;
    }else{
        document.getElementById("addInp").value = "";
        alert("Special characters are not allowed except ,/-");
    }
}
function addUserDetails(){
    debugger;
    let sName = document.getElementById("nameInp").value;
    let sPhoneNumber = document.getElementById("phoneInp").value;
    let sAddress = document.getElementById("addInp").value;
    let tableContent = document.getElementById("content");

    //tableContent.addHTML("<tr><td>sName</td><td>sPhoneNumber</td><td>sAddress</td></tr>");
    if(sName !== "" || sPhoneNumber !== "" || sAddress !== ""){
    const newRow = document.createElement("tr");
    const nameCell = document.createElement("td");
    const phoneCell = document.createElement("td");
    const addressCell = document.createElement("td");
    
    nameCell.textContent = sName;
    newRow.appendChild(nameCell);

    phoneCell.textContent = sPhoneNumber;
    newRow.appendChild(phoneCell);

    addressCell.textContent = sAddress;
    newRow.appendChild(addressCell);

    tableContent.appendChild(newRow);

    document.getElementById("nameInp").value = "";
    document.getElementById("phoneInp").value = "";
    document.getElementById("addInp").value = "";

}
}