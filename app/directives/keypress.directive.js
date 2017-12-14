var myApp = angular.module('myApp', []);

myApp.directive('keypressEvents',

function ($document, $rootScope) {
    return {
        restrict: 'A',
        link: function () {
            console.log('linked');
            $document.bind('keypress', function (e) {
                $rootScope.$broadcast('keypress', e, String.fromCharCode(e.which));
            });
        }
    }
});

function MyCtrl($scope, $rootScope) {
    $scope.key = 'none'

    $rootScope.$on('keypress', function (evt, obj, key) {
        $scope.$apply(function () {
            $scope.key = key;
        });
    })
}