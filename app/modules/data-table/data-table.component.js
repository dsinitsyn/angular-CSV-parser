(function(){

	angular.
		module('dataTable').
		component('datatable', {
			templateUrl: 'modules/data-table/data-table.template.html',
			controller: DataTableController
		});


	function DataTableController(){
		var vm = this;
	} 

})();