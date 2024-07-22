$(document).ready(function(){
         $("p").addClass("myClass1");
         $("p").addClass("myClass2");
         $("p").removeClass("myClass1 myClass2").addClass("newClass");

         $("h5").first().addClass("selected mySelected");
         $("h5").last().addClass("selected mySelected");

         $("h2").addClass(["s1","s2"]);//Array of declaration
});