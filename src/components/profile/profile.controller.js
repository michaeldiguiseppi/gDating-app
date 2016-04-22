(function() {
  angular.module('myApp')
    .controller('ProfileCtrl', ['$scope', '$rootScope', 'MemberService', 'ProfileService',
      function($scope, $rootScope, MemberService, ProfileService) {
          var currentUser = JSON.parse($rootScope.currentUser);
          var slug = currentUser.slug;
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
           },
           interestedIn: []
         };
          MemberService.getOne(slug)
            .then(function(data) {
              $scope.user = data;
              $scope.user.dob = new Date(data.dob);
              $scope.user.gender = data.gender.toString();
            });
        var data = {
          coords: {
            latitude: currentUser.address.geo.lat,
            longitude: currentUser.address.geo.lng,
          }
        };
        $scope.inactive = false;
        $scope.img_url = ProfileService.showPosition(data);
        $scope.edit = function() {
          ProfileService.edit($scope.user, JSON.parse($rootScope.currentUser)._id).then(function(data) {
            ProfileService.setSecondaryInfo(data.data);
            $scope.message = 'Information Updated Successfully.';
          }).catch(function(err) {
            $scope.fail = 'Something went wrong. Please try again.';
          });
        };
        $scope.deactivate = function() {
          var decision = confirm('Are you sure you want to deactivate your account?');
          if (decision) {
            ProfileService.edit({active: false}, JSON.parse($rootScope.currentUser)._id).then(function(data) {
              ProfileService.setSecondaryInfo(data.data);
              $scope.message = 'Profile Deactivated.';
              $scope.inactive = true;
            });
          }
        };
        $scope.activate = function() {
          ProfileService.edit({active: true}, JSON.parse($rootScope.currentUser)._id).then(function(data) {
            ProfileService.setSecondaryInfo(data.data);
            $scope.message = 'Profile Activated.';
            $scope.inactive = false;
          });
        };
      }]);
})();
