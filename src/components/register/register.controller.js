(function() {
  angular.module('myApp')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', 'RegisterService', 'ProfileService', '$state'];

  function RegisterCtrl ($scope, RegisterService, ProfileService, $state) {
    $scope.user = {};
    ProfileService.getCurrentLocation().then(function(data) {
      $scope.user.lat = data.coords.latitude;
      $scope.user.lng = data.coords.longitude;
      $scope.$digest();
    }).catch(function(data) {
      console.log('error', data);
    });
    $scope.register = function() {
      $scope.user.address.geo.lat = $scope.user.lat;
      $scope.user.address.geo.lng = $scope.user.lng;
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
