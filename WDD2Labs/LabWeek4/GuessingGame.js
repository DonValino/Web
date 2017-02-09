// Declare a module
// 1st parameter is module name (matching our app)
// 2nd parameter [] is a list of dependencies (if any)
// controller is defined as part of the module
angular.module("guessMod", [])
  .controller("guessCtrl", function($scope){
    
    //initialise the model (via the controller scope)
    $scope.guess = 
    {
      guessNum: 0,


      //define function on the model object
      getResult: function()
      {
	  	var number = getRandomInt (1, 100);
		// 1. Read the value from the form
		var guess = guessNum;
			
		if(guess > number) {
			document.getElementById("wrongGuess").innerHTML="Guess Too High!";
			return false;
		} else if(guess < number) {
			document.getElementById("wrongGuess").innerHTML="Guess Too Low!";
			return false;
		} else {
			alert("Correct! The number was " + number + "\n" + "Press ok to play again");
				return true;
		}
	}
	};
  });