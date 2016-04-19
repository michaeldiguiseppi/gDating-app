angular.module('myApp')
  .directive('navBar', [/*'authService', */function(/*authService*/) {
    return {
      restrict: 'E',
      templateUrl: '/js/nav-bar/nav-bar.template.html',
      controller: function($scope) {
        $scope.message = 'Hello!';
        // get user info to tell if someone is logged in or not.
        // $scope.user = authService.getUserInfo();
      }
    };
  }]);


  /*

  app.directive('teaInfo', ['meanTeaData', function(meanTeaData) {
  return {
    restrict: 'E',
    templateUrl: 'partials/teaInfo.html',
    controller: function($scope) {
      $scope.teas = meanTeaData;
      $scope.logIt = function(value) {
        console.log(value);
      };
    },
  };
}]);

*/
