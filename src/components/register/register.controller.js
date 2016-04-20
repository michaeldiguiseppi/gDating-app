(function() {
  angular.module('myApp')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', 'RegisterService'];

  function RegisterCtrl ($scope, RegisterService) {
    $scope.user = {};
    $scope.register = function() {
      console.log(this.user);
      RegisterService.register(this.user).then(function(data) {
        console.log("returned data: ", data);
        RegisterService.setUserInfo(data);
        $state.go('members');
      });
    };
  }
})();
