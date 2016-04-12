//make sure you opne uo cinsole in your browser//
console.log("Hello");
/* 
this is
a multiine comment*/
//Variable that holds my name//
var myName = "Tatsiana Chypsanava";
//how many caracters are in my name?
console.log(myName.length);
//variable that holds my age
var myAge = 18;
// if the user is older than 21

if( myAge>= 21) {
console.log("you are an adult");

} else if( myAge >= 13 ){
	console.log("you are a teenager");

} 

else {
	console.log("you are a child");

}
// check the length of the visitors name

if( myName.length == 0) {
	console.log("your name is required");

} else if( myName.length > 10 ) {
	console.log("your name must be at most 10 characters. You have written " + myName.length);
}
//an array (list, collection tec) of people
var people = ["Tatsiana","Lola","Dima"];
console.log( people );
console.log( people [1] );
//loop over all the people in the people array
//and display their names in the console//

for (var i = 0; i <people.length; i++) {
	console.log( people[i] );
};
//tell java script to find the button with ID = hello 
var helloButton = document.querySelector("#hello");
// listen for clicks on the hello button
helloButton.onclick = function(){
	alert('Hello you!');
}
// A function that adds two numbers together
function calculateGrandTotal( prices ) {
var grandTotal = 0;
//loop over all the prices
for(var i = 0; i < prices.length; i++) {
	grandTotal = grandTotal + prices[i];
}
//display the grand total
console.log( grandTotal );
}

//some shopping carts
var cart1 = [20, 15, 12, 45, 90, 198];
var cart2 = [10, 15, 17, 18, 200];
calculateGrandTotal( cart1 );
calculateGrandTotal( cart2 );



