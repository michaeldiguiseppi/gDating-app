(function() {
  angular.module('myApp')
    .controller('OneMemberCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'ProfileService', 'MemberService',
      function($scope, $rootScope, $state, $stateParams, ProfileService, MemberService) {
        $scope.matched = false;
        $scope.liked = false;
        $scope.getMatches = function() {
          var currentUser = JSON.parse($rootScope.currentUser);
          return MemberService.getMatches(currentUser._id).then(function(data) {
            return data;
          });
        };
        MemberService.getOne($stateParams.slug)
          .then(function(member) {
            console.log(member);
            $scope.member = member;
            var currentUser = JSON.parse($rootScope.currentUser);
            $scope.getMatches().then(function(data) {
              var matchArr = data.map(function(match) {
                return match._id;
              });
              if (matchArr.indexOf($scope.member._id) !== -1) {
                $scope.liked = true;
              }
            });
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
