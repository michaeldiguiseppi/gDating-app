(function() {
  angular.module('myApp')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$rootScope', 'LoginService', '$state'];

  function LoginCtrl ($scope, $rootScope, LoginService, $state) {
    $scope.user = {};
    $scope.login = function() {
      LoginService.login(this.user).then(function(data) {
        if (data.status === 200) {
          LoginService.setUserInfo(data);
          $state.go('members');
        } else {
          $scope.error = "Email or Password is incorrect.  Please try again.";
        }
      });
    };

  }
})();
