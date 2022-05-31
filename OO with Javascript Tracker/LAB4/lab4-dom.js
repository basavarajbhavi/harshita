//4. [DOM] Use query selector to change to the background of odd place items as lightgray

//Step1: Get all the odd place items in variable 'oddItems' in Added Items using querySelector.
//Note the li class name of items is 'list-group-item'
let oddItems = [];
var odd = document.getElementsByClassName('list-group-item');
for (var i = 0; i < odd.length; i++) {
    if(i % 2 !== 0 ) { // index is even
        oddItems.push(odd[i]);
    }
}
console.log(oddItems);
//Step2: Iterate through above list and set the background color as 'lightgray'.
for(var i=0; i<oddItems.length; i++){
   //write the code here
   oddItems[i].style.backgroundColor  = "lightgray"
}

