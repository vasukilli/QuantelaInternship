let student_count = 0;
function addStudentDetails(){
    
    
    let sName = document.getElementById("name").value;
    let sFathName = document.getElementById("fatherName").value;
    let iAge = document.getElementById("age").value;
    let iDate = document.getElementById("date").value;
    // let male = document.getElementByName("male").value;
    // let female = document.getElementByName("female").value;
    // let other = document.getElementByName("other").value;
    let genderElements = document.getElementsByName("gender");
    // let gradYes = document.getElementById("yes").value;
    // let gradNo = document.getElementById("no").value;
    let graduateElements = document.getElementsByName("Graduate");
    let skills = document.getElementById("skills").value;

    let tableContent = document.getElementById("content");

    let gender = "";
    for(let i=0 ; i<genderElements.length ; i++){
        if(genderElements[i].checked){
            gender = genderElements[i].value;
            break;
        }
    }
    let grade = "";
    for(let i=0 ; i<graduateElements.length ; i++){
        if(graduateElements[i].checked){
            grade = graduateElements[i].value;
        }
    }


    if(sName !== '' && sFathName !== '' && iAge !== '' && iDate !== '' && genderElements !== '' &&
        graduateElements !== '' && skills !== '')
        {
            student_count++;

           const newRow = document.createElement("tr");
           const SnoCell = document.createElement("td");
           const NameCell = document.createElement("td");
           const FatherNamCell = document.createElement("td");
           const AgeCell = document.createElement("td");
           const DateCell = document.createElement("td");
           const GenderCell = document.createElement("td");
           const GraduateCell = document.createElement("td");
           const SkillsCell = document.createElement("td");
           const ActionsCell = document.createElement("td");

        //    let i = 1;
           
            SnoCell.textContent = student_count;
            newRow.appendChild(SnoCell);

           NameCell.textContent = sName;
           newRow.appendChild(NameCell);

           FatherNamCell.textContent = sFathName;
           newRow.appendChild(FatherNamCell);

           AgeCell.textContent = iAge;
           newRow.appendChild(AgeCell);

           DateCell.textContent = iDate;
           newRow.appendChild(DateCell);

           GenderCell.textContent = gender;
           newRow.appendChild(GenderCell);

           GraduateCell.textContent = grade;
           newRow.appendChild(GraduateCell);

        //    let gend = document.querySelector(".g1");
           
        //    if(gend === "Male"){
        //    GenderCell.textContent = male;
        //    newRow.appendChild(GenderCell);
        //    }else if(gend === "Female"){
        //     GenderCell.textContent =female;
        //     newRow.appendChild(GenderCell);
        //    }else{
        //     GenderCell.textContent = other;
        //     newRow.appendChild(GenderCell);
        //    }
        // //let gend = document.querySelectorAll(".g1");
           
        //    if(gradYes === 'yes'){
        //    GraduateCell.textContent = gradYes;
        //    newRow.appendChild(GraduateCell);
        //    }else{
        //    GraduateCell.textContent = gradNo;
        //    newRow.appendChild(GraduateCell);
        //    }

           SkillsCell.textContent = skills;
           newRow.appendChild(SkillsCell);

           
           let deleteBtn = document.createElement("button");
           deleteBtn.innerText = "Delete";
           ActionsCell.appendChild(deleteBtn);

           deleteBtn.onclick = function(){
            tableContent.removeChild(newRow);
            student_count = student_count-1;
           }

           let editBtn = document.createElement("button");
           editBtn.innerText = "Edit";
           ActionsCell.appendChild(editBtn);

           editBtn.onclick = function(){
            debugger;
              let snum = prompt("Enter a serial Number for updating the details !!!..");
              if(snum == student_count){
                document.getElementById("name").value = sName;
                document.getElementById("fatherName").value = sFathName;
                document.getElementById("age").value = iAge ;
                document.getElementById("date").value = iDate;
                document.getElementById("skills").value = skills;
                //tableContent.removeChild(newRow);


              }
           }

           let saveBtn = document.createElement("button");
           saveBtn.innerText = "Save";
           ActionsCell.appendChild(saveBtn);

           newRow.appendChild(ActionsCell);

           tableContent.appendChild(newRow);

           document.getElementById("name").value = '';
           document.getElementById("fatherName").value = '';
           document.getElementById("age").value = '';
           document.getElementById("date").value = '';
           genderElements.forEach((input) =>{
            input.checked = false;
           });
           graduateElements.forEach((input) =>{
            input.checked = false;
           })

           document.getElementById("skills").value = '';


          
        }else{
            alert("please fill all the details");
        }

}










        
    
