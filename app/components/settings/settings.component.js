angular
	.module('app')
	.component('settings', {
		templateUrl: 'app/components/settings/settings.html',
		controller: SettingsController
	});

function SettingsController() {

	console.log('Settings!!');

}