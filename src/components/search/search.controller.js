(function() {
  angular.module('myApp')
    .controller('SearchCtrl', ['$scope', 'SearchService', function($scope, SearchService) {
      var ages = [];
      for (var i = 18; i < 90; i++) {
        ages.push(i);
      }
      $scope.ages = ages;
      $scope.search = {};
      $scope.search.searchType = 'OR';
      $scope.searchFunc = function() {
        console.log(this.search);
      };
    }]);
})();
