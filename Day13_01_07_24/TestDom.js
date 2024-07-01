const findOuter = () =>{
   const para = document.getElementsByTagName("p");
   const allPara = para.length;//10
   alert(`Total paragraphs are ${allPara}`);
};
const findDiv1 = () =>{
    const para = document.getElementById("inner-para1");
    const div1Para = para.getElementsByTagName("p");
    const div1ParaCnt = div1Para.length;
    alert(`Total paragraphs ${div1ParaCnt}`);

};
const findDiv2 = () =>{
    const para = document.getElementById("inner-para2");
    const div2para = para.getElementsByTagName("p");
    const div2paraCnt = div2para.length;
    alert(`Total paragraphs ${div2paraCnt}`);
};