(function(){

	Array.prototype.impose = function(array){
		var mainArray = this;

		for(var i = 0; i < array.length; i++){
			for(var j = 0; j < array[i].length; j++){
				if (array[i][j].length > 1){
					mainArray[i][j] = array[i][j];
				}
			}
		}
		return mainArray;
	}


	function upload(){
		return{
			restrict: 'EA',
			templateUrl: 'directives/upload/upload.template.html',
			replace: true,
			link: function($scope, element, attrs) {

				var uploadButton = element.find('button'),
					uploadInput = element.find('input'),
					uploadFile;
				
				$scope.uploaded = false;
				$scope.uploadText = (attrs.type == "upload")
					? 'Upload your CSV table'
					: 'Update your CSV table';


				attrs.$observe('type', function(value) {
	                element.find('button').text(value)
	            })

	            //binding events

	            uploadInput.on('change', function(){
	            	uploadFile = uploadInput[0].files[0];


	            	if (uploadFile.type == 'text/csv'){
		            	$scope.uploadText = uploadFile.name;
		            	$scope.uploaded = true;
						$scope.$apply();
	            	}else{
	            		alert('Please upload CSV file!');
	            	}

	            });

				uploadButton.on('click', function(){
					initReader();
				});

				function initReader(){
					var reader = new FileReader();

					reader.onload = function(element){
						var file = element.target.result;
						(attrs.type == 'update')
							? updateTable(file)
							: uploadTable(file);
					}
					reader.readAsText(uploadFile);
				}

				//uploading file

				function uploadTable(file){
					$scope.table = parseUploadFile(file);
					$scope.$apply();
				}

				function parseUploadFile(file){
					return file.split('\n').map(function(value){
						return value.split(',');
					});
				}

				//upadting file

				function parseUpdateFile(file){
					var updateArray = [],
						updateObj = {array: [],	time: 0},
						fileRows = file.split('\n');

					fileRows.forEach(function(element, index){

						if (++index % 11){
							element = element.split(',');
							updateObj.array.push(element);
						}else{
							updateObj.time = element;
							updateArray.push(updateObj);
							updateObj = {array: [], time: 0};
						}
					});

					return updateArray;
				}

				function updateTable(file){
					parseUpdateFile(file).forEach(function(table, index){

						setTimeout(function(){
							table.array.unshift($scope.table[0]);
							$scope.table.impose(table.array);
							$scope.$apply();
						}, table.time);
						
					});
				}
			},
			scope:{
				table: '=output'
			}
		}
	}

	angular
		.module('CSVParserApp')
		.directive('upload', upload);

})();