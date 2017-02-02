angular.module("app").directive("menuDirective", function($state) {
	
	return {
		restrict: "E",
		templateUrl: "./features/directives/menu/menu.template.html",
		link: function ($scope) {
			$scope.home = true;
			
			if ($state.includes("home")) {
    			$scope.home = false;
			}
		}
	}
});