var app = angular.module('myForm', []);

app.directive('login', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: './login-template.html',
		replace: true
	};
});

app.run(function($rootScope){
  $rootScope.sayHi = function(){
    alert($rootScope.inputName);
  };
});

app.directive('myGreet', function(){
	return function($scope, element, attrs){
		element.on('click', function(){
			$scope.$apply(function(){
				$scope.$eval(attrs.myGreet);
			});
		});
	};
})