//find the form
var registrationForm = document.querySelector('#registration');
// wait forthe user to submit the form
registrationForm.onsubmit = function(event) {
	
	//patterns used for validation
	var usernamePattern = new RegExp("^[a-zA-Z0-9.\-_]{3,20}$");
	var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$");
	//get reference to the imput fields
	var usernameInput =document.querySelector("#username");
	var usernameMessage = document.querySelector("#username-message");
	var nameInput = document.querySelector("#fullname");
	var nameMessage = document.querySelector("#fullname-message");

	//check the user name
	if(usernamePattern.test(usernameInput.value)) {
		//usrename is valid
		
		usernameMessage.innerHTML = "";

	} else {
		
		usernameMessage.innerHTML = "Username is invalid";
	}

	if(namePattern.test(usernameInput.value)) {
		//name is valid
		
		nameMessage.innerHTML = "";
	var nameInput = document.querySelector("#fullname");
	} else {
		
		nameMessage.innerHTML = "Username is invalid";
	}

//stop th form from submition
 event.preventDefault();

}