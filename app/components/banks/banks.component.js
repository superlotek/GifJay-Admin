angular
	.module('app')
	.component('banks', {
		templateUrl: 'app/components/banks/banks.html',
		controller: BanksController
	});

function BanksController(BankService, $scope) {
	var ctrl = this;
	ctrl.banks = [];

	ctrl.$onInit = function () {
		console.log('BanksController loaded!');
		BankService.getBanks()
			.then(function (response) {
				ctrl.banks = response;
			});
	};

}