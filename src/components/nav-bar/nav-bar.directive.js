(function() {
  angular.module('myApp')
    .directive('navBar', ['LoginService', function(LoginService) {
      return {
        restrict: 'E',
        templateUrl: '/components/nav-bar/nav-bar.template.html',
        controller: function($scope, $rootScope) {
          
        }
      };
    }]);
})();
