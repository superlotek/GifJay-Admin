function GifService($http) {
	console.log('BankService!');
	
	var API = 'app/json/banks.json';

	return {
		getKey: getKey,
		getKeys: getKeys
	};

	function getKey(bankName, id) {

		return $http
			.get(`bins/${bankName}/${id}.gif`)
			.then(function (response) {
				return response.status;
			})
			.catch(function (error) {
				return error.status;
			});
	}

	function getBanks() {
		return $http
			.get(API)
			.then(function(response){
				var keys = response.data;

				var promises = [];

				keys.forEach(function (key, index) {

					if(typeof key.gif !== {}) {

						var promise = getKey([key.gif.bankName], key.gif.id)
							.then(function (serverResponse) {
								if (serverResponse === 404) {
									keys[index].failedToReach = true;
								}
							})

						promises.push(promise);

					}

				});

				return Promise.all(promises)
					.then(function (response) {
						return keys;
					});

			}, function(reason) {
				console.log('Nope, not working!');
			});
	}
}

angular
	.module('app')
	.service('BankService', BankService);