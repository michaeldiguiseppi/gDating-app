(function() {
  angular.module('myApp')
    .controller('OneMemberCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'ProfileService', 'MemberService',
      function($scope, $rootScope, $state, $stateParams, ProfileService, MemberService) {
        $scope.matched = false;
        $scope.liked = false;
        $scope.getMatches = function() {
          var currentUser = JSON.parse($rootScope.currentUser);
          MemberService.getMatches(currentUser._id).then(function(data) {
            if (data.indexOf(currentUser._id) !== -1) {
              $scope.liked = true;
            }
          });
        };
        MemberService.getOne($stateParams.slug)
          .then(function(member) {
            console.log(member);
            $scope.member = member;
            var currentUser = JSON.parse($rootScope.currentUser);
            $scope.getMatches();
            if (currentUser._matches.indexOf($scope.member._id) !== -1) {
              $scope.matched = true;
            }
          });
        $scope.addMatch = function() {
          var currentUser = JSON.parse($rootScope.currentUser);
          MemberService.addMatch(currentUser._id, $scope.member._id).then(function(data) {
            ProfileService.setSecondaryInfo(data);
            $scope.matched = true;
          });
        };
    }]);
})();
