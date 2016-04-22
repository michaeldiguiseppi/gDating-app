(function() {
  angular.module('myApp')
    .controller('SearchCtrl', ['$scope', '$state', 'SearchService', function($scope, $state, SearchService) {
      var ages = [];
      for (var i = 18; i < 90; i++) {
        ages.push(i);
      }
      $scope.ages = ages;
      $scope.search = {};
      $scope.search.exclusive = 'false';
      $scope.searchFunc = function() {
        SearchService.search($scope.search).then(function(data) {
          $scope.searchResults = data.data.data;
          $scope.showReset = true;
        });
      };
      $scope.getOne = function(slug) {
        SearchService.getOne(slug).then(function(data) {
          $state.go('members.view', {slug: slug});
        });
      };
      $scope.resetSearch = function() {
        $scope.search = {};
        $scope.searchResults = null;
        $scope.showReset = false;
      };
    }]);
})();
