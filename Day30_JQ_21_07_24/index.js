// $(document).ready(function(){
//     $("a").click(function(){
//         alert("Thanks for clicked!");
//     });
// });

$(document).ready(function (){
    $("a").click(function(evt){
        evt.preventDefault();
        alert("Thanks for clicking! , This click is not going to that specific link");
    });
})

