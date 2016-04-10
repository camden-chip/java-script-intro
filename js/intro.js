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




