//find the form
var registrationForm = document.querySelector('#registration');
// wait forthe user to submit the form
registrationForm.onsubmit = function(event) {
	//stop the form from submitting
	
	 event.preventDefault();
}