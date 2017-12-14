function FileSaverController($scope, GifService) {

	console.log('Is this thing on??');
	var ctrl = this;

	GifService
	.then(function(response) {
		ctrl.clips = response;
	})


	$scope.saveToPc = function (data, filename) {

	  if (!data) {
	    console.error('No data');
	    return;
	  }

	  if (!filename) {
	    filename = 'download.json';
	  }

	  if (typeof data === 'object') {
	    data = angular.toJson(data, undefined, 2);
	  }

	  var blob = new Blob([data], {type: 'text/json'});

	  // FOR IE:

	  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
	      window.navigator.msSaveOrOpenBlob(blob, filename);
	  }

	  else{

	      var e = document.createEvent('MouseEvents'),
	          a = document.createElement('a');

	      a.download = filename;
	      a.href = window.URL.createObjectURL(blob);
	      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
	      e.initEvent('click', true, false, window,
	          0, 0, 0, 0, 0, false, false, false, false, 0, null);
	      a.dispatchEvent(e);
	  }
	};
}

angular
	.module('app')
	.controller('FileSaverController', FileSaverController);
