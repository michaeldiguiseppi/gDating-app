(function() {
  angular.module('myApp')
    .directive('navBar', [/*'authService', */function(/*authService*/) {
      return {
        restrict: 'E',
        templateUrl: '/components/nav-bar/nav-bar.template.html',
        controller: function($scope) {
          $scope.message = 'Hello!';
          // get user info to tell if someone is logged in or not.
          // $scope.user = authService.getUserInfo();
        }
      };
    }]);
})();
