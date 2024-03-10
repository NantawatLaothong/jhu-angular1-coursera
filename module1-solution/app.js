(function(){
    'use strict';
 
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.state = "";
        $scope.checkTextbox = function(){
            var list = $scope.items.split(',').map(item=>item.trim());
            if($scope.items.length === 0){
                $scope.state = "Empty";
            }else if(list.length <= 3){
                $scope.state = "Enjoy!";
            } else {
                $scope.state = "Too much!";
            }
        }
    }
})()