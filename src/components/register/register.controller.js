(function() {
  angular.module('myApp')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', 'RegisterService', '$state'];

  function RegisterCtrl ($scope, RegisterService, $state) {
    $scope.user = {};
    $scope.register = function() {
      RegisterService.register($scope.user).then(function(data) {
        console.log(data.data.data);
        if (data.status === 201) {
          RegisterService.setUserInfo(data.data.data);
          $state.go('members');
        } else {
          $scope.errors = data.data.errors;
        }
      });
    };
  }
})();
