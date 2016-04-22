(function() {
  angular.module('myApp')
    .controller('ProfileCtrl', ['$scope', '$rootScope', 'MemberService', 'ProfileService',
      function($scope, $rootScope, MemberService, ProfileService) {
          var currentUser = JSON.parse($rootScope.currentUser);
          var slug = currentUser.slug;
          MemberService.getOne(slug)
            .then(function(data) {
              $scope.user = data;
              $scope.user.dob = new Date(data.dob);
            });
        var data = {
          coords: {
            latitude: currentUser.address.geo.lat,
            longitude: currentUser.address.geo.lng,
          }
        };
        $scope.img_url = ProfileService.showPosition(data);
        $scope.edit = function() {
          ProfileService.edit($scope.user, JSON.parse($rootScope.currentUser)._id).then(function(data) {
            ProfileService.setSecondaryInfo(data.data);
          });
        };
      }]);
})();
