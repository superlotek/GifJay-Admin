angular
	.module('app')
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeController as ctrl',
				template: `
					<h1>Home</h1>
					`	
			})
			.state('settings', {
				url: '/settings',
				component: 'settings'
			})
			.state('play', {
				url: '/play',
				component: 'play'
			})
			.state('banks', {
				url: '/banks',
				component: 'banks'
			});

			$urlRouterProvider.otherwise('/');
	});