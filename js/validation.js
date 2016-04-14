//find the form
var registrationForm = document.querySelector('#registration');
// wait forthe user to submit the form
registrationForm.onsubmit = function(event) {
	var totalErrors = 0;
	
	//patterns used for validation
	
	//get reference to the imput fields
	var usernameInput = document.querySelector("#username");
	var usernameMessage = document.querySelector("#username-message");
	var nameInput = document.querySelector("#full-name");
	var nameMessage = document.querySelector("#fullname-message");
	var campusMessage = document.querySelector('#campus-message');
	var campusOptions = document.querySelectorAll('[name=campus]');

	//check the user name
	if(usernamePattern.test(usernameInput.value)) {
		//usrename is valid
		
		usernameMessage.innerHTML = "";

	} else {
		
		usernameMessage.innerHTML = "Username is invalid";
		totalErrors++;
	}

	if(namePattern.test(nameInput.value)) {
		//name is valid
		
		nameMessage.innerHTML = "";
	} else {
		nameMessage.innerHTML = "name is invalid";
		totalErrors++;
	}
	//loop over all campus options
	var campusIsSelected = false;
for (var i=0; i < campusOptions.length; i++) {
	//check if this campus has been selected
	if( campusOptions[i].checked ) {
		campusIsSelected = true;
	}
}
//If campusIsSelected is still false
if( campusIsSelected == false) {
campusMessage.innerHTML = 'Please select a campus';
totalErrors++;
} else {
	campusMessage.innerHTML ='';
}
//if the total errors greater than 0
if( totalErrors > 0) {
//stop th form from submition
 event.preventDefault();}

}