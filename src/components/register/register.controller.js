(function() {
  angular.module('myApp')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', 'RegisterService', '$state'];

  function RegisterCtrl ($scope, RegisterService, $state) {
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
