function NavController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

angular
	.module('app')
	.controller('NavController', NavController);