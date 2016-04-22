(function() {
  angular.module('myApp')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', 'RegisterService', 'ProfileService', '$state'];

  function RegisterCtrl ($scope, RegisterService, ProfileService, $state) {
    $scope.user = {
     username: '',
     email: '',
     password: '',
     gender: 0,
     slug: '',
     names: {
       firstName: '',
       lastName: '',
     },
     dob: '',
     address: {
       zipcode: '',
       geo: {
         lat: '',
         lng: ''
       }
     }
   };
    ProfileService.getCurrentLocation().then(function(data) {
      $scope.user.address.geo.lat = data.coords.latitude;
      $scope.user.address.geo.lng = data.coords.longitude;
      $scope.$digest();
    }).catch(function(data) {
      console.log('error', data);
    });
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
