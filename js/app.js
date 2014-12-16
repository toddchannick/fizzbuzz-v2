$(document).ready(function() {
	var results = $('.results');	
	$('.start').on('click', function(){
		results.text('');
		var userInput = $('#usernumber').val();
		if (userInput%1 != 0){
			alert('Please enter an integer value. No decimals.')
			$('#usernumber').val('');
		}
		else if (!$.isNumeric(userInput)){
			alert('Please enter a numerical value.')
			$('#usernumber').val('');
		}
		else {
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
				};
			};
		};
	});
});



