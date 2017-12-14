angular
	.module('app')
	.component('play', {
		templateUrl: 'app/components/play/play.html',
		controller: PlayController
	});

function PlayController(GifService, $scope) {

	console.log('The PlayController');

	var ctrl = this;
	ctrl.keys = [];
	$scope.loading = false;

	ctrl.$onInit = function () {

		GifService.getKeys()
			.then(function (response) {
				ctrl.keys = response;
			});
	};

	var s1 = '.stage-one';

  	var gifArray = ['gif10','gif2','gif3','gif4','gif5','gif6','gif7','gif8','gif9'];
  	var letterArray = ['a','b','c','d','e','f','g','h','i'];

    for(let i = 0; i < letterArray.length; i++) {
		Mousetrap.bind(letterArray[i], function() {
  			$(s1).css('background-image', 'url(bins/blackwhite/' + gifArray[i] + '.gif)');
		});
    }

}