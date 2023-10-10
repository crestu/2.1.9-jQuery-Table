$(document).ready(function(){
//change th tags 
    //so that font size is 20px
    //style is italic
    //(use one .css function)
//odd columns of the table data
    //light blue
//even columns
    //tomato
//research :nth-child

$("th").css("font-size","20px");
$("th").css("font-style","italic");

$("table td:nth-child(even)").css("background-color", "tomato");
$("table td:nth-child(odd)").css("background-color", "lightblue");

});