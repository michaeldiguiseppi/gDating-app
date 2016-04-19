(function() {
  angular.module('myApp')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope'];

  function RegisterCtrl ($scope) {
    $scope.user = {};
    $scope.register = function() {
      console.log(this.user);
    };
  }
})();
