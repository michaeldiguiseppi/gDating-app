(function() {
  angular.module('myApp')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', 'RegisterService', '$state'];

  function RegisterCtrl ($scope, RegisterService, $state) {
    $scope.user = {};
    $scope.register = function() {
      RegisterService.register(this.user).then(function(data) {
        if (data.status === 200) {
          RegisterService.setUserInfo(data);
          $state.go('members');
        } else {
          $scope.errors = data.data.errors;
        }
      });
    };
  }
})();
