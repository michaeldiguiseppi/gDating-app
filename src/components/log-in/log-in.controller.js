(function() {
  angular.module('myApp')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$rootScope', 'LoginService', '$state'];

  function LoginCtrl ($scope, $rootScope, LoginService, $state) {
    $scope.user = {};
    $scope.login = function() {
      LoginService.login(this.user).then(function(data) {
        console.log('Returned data: ', data);
        LoginService.setUserInfo(data);
        $state.go('members');
      });
    };

  }
})();
