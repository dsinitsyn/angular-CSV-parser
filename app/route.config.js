(function(){
	
	angular.
		module('CSVParserApp').
		config(['$locationProvider' ,'$routeProvider',

			function config($locationProvider, $routeProvider) {

				$locationProvider.hashPrefix('!');

				$routeProvider.
					when('/table', {
						template: '<datatable></datatable>'
					}).
					otherwise('/table');
					
			}
		]);

})();

