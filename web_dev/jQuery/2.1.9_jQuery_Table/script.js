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


//create function checkCost
    //if cost graeter than 10$
    //change background color to tomato
//create a for loop
    //:nth-child(num)
//use parseFloat
    //see if value <10
    //convert the text value of column to a float
//use .length to figure out how many elements are in an html file
    //return number pf element
    //iterate throught trs

$("th").css("font-size","20px");
$("th").css("font-style","italic");

$("table td:nth-child(odd)").css("background-color", "lightblue");

checkCost();

function checkCost(){
    for(var i=1; i<=$("tr").lenth; i++)
    var item = $("tr:nth-child (" + i +") td:nth-child(2)");
    var cost = parseFloat(item.text());
    if(cost>10){
        item.css("background-color","tomato");

    }
}

});