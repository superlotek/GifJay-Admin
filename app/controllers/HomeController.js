function HomeController() {
	this.viewName = 'Home View';
	console.log('HOME CONTROLLER!');
}

angular
	.module('app')
	.controller('HomeController', HomeController);