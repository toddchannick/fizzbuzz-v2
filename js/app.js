
$(document).ready(function() {
	var results = $('.results');	
	$('.start').click(function(){
		var userInput = $('#usernumber').val();
		for (i=userInput; i<=100; i++){
			if (i%5 == 0 && i%3 == 0) {
				results.append('<li>FizzBuzz</li>')
			}
			else if (i%3 == 0) {
				results.append('<li>Fizz</li>')
			}
			else if (i%5 == 0) {
				results.append('<li>Buzz</li>')
			}
			
			else {
				results.append('<li>'+i+'</li>')
			}
		};
	});
});


