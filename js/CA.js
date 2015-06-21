angular.module( "CA", [] ).controller( "CAController", function CAController( $scope ) {

    $scope.displayValue = 0;
    $scope.memory = null;
    $scope.result = 0;
    $scope.operation = null;
    $scope.wasPoint = false;
    $scope.wasResult = false;
    $scope.wasInverse = false;

    $scope.saveInMemory = function() {

        if ($scope.memory == null) {

            $scope.memory = parseFloat( $scope.displayValue );

        }

    };

    $scope.onClickClear = function() {

        $scope.operation = null;
        $scope.memory = null;
        $scope.result = 0;
        $scope.displayValue = 0;
        $scope.wasInverse = false;
        $scope.wasPoint = false;

    };

    $scope.onClickOperator = function( operator ) {

        if ( $scope.wasResult ) {

            $scope.wasResult = false;

        }

        $scope.saveInMemory();
        $scope.operation = operator;

        if ( operator == '+' ) {

            if ( !$scope.wasInverse ) {

                $scope.wasInverse = true;
                $( '#plus-btn' ).text( '-' );

            } else {

                $scope.memory *= (-1);

                if ( $( '#plus-btn' ).text() == '-' ) {

                    $( '#plus-btn' ).text( '+' );

                } else {

                    $( '#plus-btn' ).text( '-' );

                }
            }
        } else {

            $( '#plus-btn' ).text( '+' );
            $scope.wasInverse = false;

        }

        $scope.result = 0;
        $scope.displayValue = 0;
        $scope.wasPoint = false;

    };

    $scope.onClickNum = function( num ) {

        if ( $scope.wasResult ) {

            $scope.memory = null;
            $scope.wasResult = false;

        }

        var valueString = '';

        if ( $scope.displayValue.toString() != '0' ) {

            var display = $scope.displayValue.toString();

        } else {

           var display = '';

        }

        valueString = display.toString() + num.toString();
        $scope.displayValue = valueString;
        $scope.result = valueString;

    };

    $scope.onClickPoint = function() {

        var valueString = '';

        if ( !$scope.wasPoint ) {

            var display = parseFloat( $scope.displayValue );
            valueString = display.toString() + '.';

        } else {
            valueString = parseFloat( $scope.displayValue );
        }

        $scope.displayValue = valueString;
        $scope.result = valueString;
        $scope.wasPoint = true;

    };

    $scope.onClickCalculate = function() {

        if ( $scope.operation == "+" ) {

            $scope.result = parseFloat( $scope.memory ) + parseFloat( $scope.displayValue );

        } else if ( $scope.operation == "-" ) {

            $scope.result = parseFloat( $scope.memory ) - parseFloat( $scope.displayValue );

        } else if ( $scope.operation == "*" ) {

            $scope.result = parseFloat( $scope.memory ) * parseFloat( $scope.displayValue );

        } else if ( $scope.operation == "/" ) {

            $scope.result = parseFloat( $scope.memory ) / parseFloat( $scope.displayValue );

        }

        $scope.operation = null;
        $scope.displayValue = 0;
        $scope.wasInverse = false;
        $scope.wasPoint = false;
        $scope.wasResult = true;
        $('#plus-btn').text('+');
        $scope.memory = $scope.result;

    };
});
