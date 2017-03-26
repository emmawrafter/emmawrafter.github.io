function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	/*
	If the user's first name is 'General' and their last name is NOT 'Assembly', then
	greet the general'
	*/

	if (firstName == "General" && lastName != "Assembly") {
		console.log('Greetings General');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase().trim();
	if (faveColour === 'red' ||
		faveColour === 'green' ||
		faveColour === 'blue' ||
		faveColour === 'purple' ||
		faveColour === 'pink' ||
		faveColour === 'brown' ||
		faveColour === 'black' ||
		faveColour === 'yellow') {
		$('h1').css('color',faveColour);
	} 
	

var age = prompt('How old are you?');
age = parseInt(age);

if (age >= 18) {
	console.log('user is an adult');
}else if (age>= 13) {
	console.log('user is a teenager');
} else {
	console.log('user is a child');
}

}


// When the page has loaded
$(function() {
		$('img').on('click', askQuestions);
	// when the user clicks an h3
	$('h3').on('click', function() {
		//Toggle the next element
		$(this).next().slideToggle();

	});
});