//9. [Async/await] Use Async Programming for displaying a Thank You message if customer gives rating more than 3.

//Step1: Get the form whose id is 'ratingForm'. 
//var form = 'Write Code Here'
var form=document.getElementById("ratingForm");

form.addEventListener('submit', rateFunction);

//Step2: Create a async function rateFunction.


//Step2.a: Get the rating value from select id 'ratingId'.

//Step2.b: Create a promise to get the succes message "Thank You!" if rating is greater then 3.
//Step2.c: Use 'await' to make sure async function is executed and diaplay the message of promise in 'p' id of 'rateMessage'.
 async function rateFunction(e) {
    e.preventDefault();

const ratingValue = document.getElementById("ratingId");
   let myPromise = new Promise(function(resolve) {
  if(parseInt(ratingValue.value) > 3){
    resolve("Thank You!");
	}
	else{
	resolve("");
	}
  });
  document.getElementById("rateMessage").innerHTML = await myPromise;
}




