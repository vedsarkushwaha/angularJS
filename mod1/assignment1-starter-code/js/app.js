(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

      $scope.LunchCheckButton = function() {
        // check the value $scope.LunchFoodList

        // if $scope.LunchFoodList empty
        if(checkEmptyString($scope.LunchFoodList)) {
          $scope.NoDataLunchCheckMessage = "Please enter data first";
          $scope.LunchCheckMessage = "";
          $scope.textBorderColor = "red";
        }
        else {
          var arrayOfLunchItem = $scope.LunchFoodList.split(",");
          $scope.textBorderColor = "green";

          var LunchItemCount = getLunchItemCount(arrayOfLunchItem);

          if(LunchItemCount<=3) {
            $scope.NoDataLunchCheckMessage = "";
            $scope.LunchCheckMessage = "Enjoy!";
          }
          else {
            $scope.LunchCheckMessage = "Too much!";
          }
        }
      };

      function getLunchItemCount(arrayOfLunchItem) {
        var itemCnt=0;
        for(var i=0; i<arrayOfLunchItem.length; i++) {
          if(!checkEmptyString(arrayOfLunchItem[i])) {
            itemCnt++;
          }
        }
        return itemCnt;
      }

      function checkEmptyString(strValue) {
        if(strValue==="" || !strValue) {
          return true;
        }
        else {
          return false;
        }
      }
    }
})();
