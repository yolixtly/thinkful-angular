var app = angular.module('myForm', []);

app.directive('login', function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: './login-template.html',
		replace: true
	};
});
