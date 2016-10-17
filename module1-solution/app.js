(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.message = "";
  $scope.list_of_food_items = "";

  $scope.checkQuantity = function () {
    var food_items_array = $scope.list_of_food_items.split(',');
    var n = 0;

    for (var i in food_items_array) {
      if (food_items_array[i].trim().length != 0) {
        n++;
      }
    }

    if  (n === 0) {
      $scope.message = "Please enter data first."
    } else if (n <= 3) {
      $scope.message = "Enjoy!"
    } else {
      $scope.message = "Too much!"
    }
  }
}
})();
