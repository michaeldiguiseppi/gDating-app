(function() {
  angular.module('myApp')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', 'LoginService'];

  function LoginCtrl ($scope, LoginService) {
    $scope.user = {};
    $scope.logIn = function() {
      console.log(this.user);
      LoginService.logIn(this.user);
    };
  }
})();
