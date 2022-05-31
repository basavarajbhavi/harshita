//1. [DOM] Add a background color 'yellow' and add a bottom border to the header 'Fiery Restaurant': solid, 5px and black color

//Step1: Use 'getElementById' to get the header and store it in a variable. 
//Note: Class name of header is 'headerTitle'.
//var title = 'Write code here'

let title = document.getElementById('headerTitle');
title.style.backgroundColor = "yellow";
title.style.borderBottom = "solid 5px #000";


