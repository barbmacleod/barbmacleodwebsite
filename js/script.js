$(document).ready(function(){
console.log("test 1");
//Command for ID (#) as opposed to a class (.)//

$("#close, #hamburger").click(function(){
  $("#hamburger,#close").toggle();
console.log("test 2");
  $(".parent").toggleClass("open-nav");

})
})
