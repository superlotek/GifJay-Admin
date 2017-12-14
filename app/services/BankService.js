function BankService($http) {
	console.log('BankService!');
	
	var API = 'app/json/banks.json';

	return {
		// getBank: getBank,
		getBanks: getBanks
	};

	// function getBank(bankName, id) {

	// 	return $http
	// 		.get(`bins/${bankName}/${id}.gif`)
	// 		.then(function (response) {
	// 			return response.status;
	// 		})
	// 		.catch(function (error) {
	// 			return error.status;
	// 		});
	// }

	function getBanks() {
		return $http
			.get(API)
			.then(function(response){
				var banks = response.data;
				console.log(banks);
				return banks;
				// var promises = [];

				// banks.forEach(function (bank, index) {

				// 	if(typeof bank.gif !== {}) {

				// 		var promise = getBank([bank.bankName])
				// 			.then(function (serverResponse) {
				// 				if (serverResponse === 404) {
				// 					banks[index].failedToReach = true;
				// 				}
				// 			})

				// 		promises.push(promise);

				// 	}

				// });

				// return Promise.all(promises)
				// 	.then(function (response) {
				// 		return banks;
				// 	});

			}, function(reason) {
				console.log('Nope, not working!');
			});
	}
}

angular
	.module('app')
	.service('BankService', BankService);