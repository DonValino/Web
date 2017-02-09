// Declare a module
// 1st parameter is module name (matching our app)
// 2nd parameter [] is a list of dependencies (if any)
// controller is defined as part of the module
angular.module("calcMod", [])
  .controller("calcCtrl", function($scope){
    
    //initialise the model (via the controller scope)
    $scope.calc = 
    {
      num1: 0,
      num2: 0,
	  operator: "+",

      //define function on the model object
      getResult: function()
      {
		var a = Number(this.num1);
		var b = Number(this.num2);
		
		if (this.operator == "+")
			return   a + b;
		else if (this.operator == "-")
			return   a - b;
		else if (this.operator == "*")
			return   a * b;
		else if (this.operator == "/")
			return   a / b;
	}
	};
  });