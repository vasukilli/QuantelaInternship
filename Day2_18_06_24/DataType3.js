const product = {
    title : "Pen",
    ratting : 4,
    discount : 50,
    isDeal : false
};
if(product['isDeal']){
    console.log("The Deal of the day");
    console.log(product.title + " " + product["ratting"] + " " + product['discount']);
}else{
    console.log("This is not deal of the day today")
}

const profile = {
    userName : "@VasudevaRao Killi",
    isFollow : true,
    followers : 240,
    following : 150,


};
if(profile['userName'] == "@VasudevaRao"){
console.log(profile);
}else{
    console.log("profile is empty");
}
console.log(typeof profile['isFollow']);
console.log(typeof profile["followers"]);
console.log(typeof profile['userName']);