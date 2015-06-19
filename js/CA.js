angular.module("CA", []).controller("CAController",
	function CAController($scope) {
		$scope.displayValue = 0;
		$scope.memory = null;
		$scope.result = 0;
		$scope.operation = null;

		$scope.saveInMemory = function() {
			if ($scope.memory == null) {
				$scope.memory = parseFloat($scope.displayValue);
			}
		};
		$scope.onClickClear = function() {
			$scope.operation = null;
			$scope.memory = null;
			$scope.displayValue = 0;
			$scope.result = 0;
		};
		$scope.onClickSum = function() {
			$scope.saveInMemory();
			$scope.operation = "+";
			$scope.displayValue = 0;
		};
		$scope.onClickSubtract = function() {
			$scope.saveInMemory();
			$scope.operation = "-";
			$scope.displayValue = 0;
		};
		$scope.onClickMultiply = function() {
			$scope.saveInMemory();
			$scope.operation = "*";
			$scope.displayValue = 0;
		};
		$scope.onClickDivide = function() {
			$scope.saveInMemory();
			$scope.operation = "/";
			$scope.displayValue = 0;
		};
		$scope.onClickCalculate = function() {
			if ($scope.operation == "+"){
				$scope.result = parseFloat($scope.memory) + parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "-"){
				$scope.result = parseFloat($scope.memory) - parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "*"){
				$scope.result = parseFloat($scope.memory) * parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "/"){
				$scope.result = parseFloat($scope.memory) / parseFloat($scope.displayValue);
			}

			$scope.memory = $scope.result;
		};
	}
);
