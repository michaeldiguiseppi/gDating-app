(function() {
  angular.module('myApp')
    .directive('members', ['MemberService', function(MemberService) {
      return {
        restrict: 'E',
        templateUrl: '/components/members/members.template.html',
        controller: function($scope, MemberService, $rootScope) {
          $scope.loading = true;
          var currentMembers = [];
          var offset = 0;
          MemberService.getAll().then(function(data) {
            for (var i = 0; i < 5; i++) {
              currentMembers.push(data[i]);
              offset = 5;
            }
            $scope.members = currentMembers;
            $scope.loading = false;
            $scope.next = function() {
              if (offset <= data.length) {
                currentMembers = [];
                for (var i = offset; i < offset + 5; i++) {
                  currentMembers.push(data[i]);
                }
                offset += 5;
                $scope.members = currentMembers;
              }
            };
            $scope.prev = function() {
              if (offset >= 5) {
                currentMembers = [];
                for (var i = offset; i > offset - 5; i--) {
                  currentMembers.push(data[i]);
                }
                offset -= 5;
                $scope.members = currentMembers;
              }
            };
          });
          $scope.getOne = function(id) {
            MemberService.getOne(id).then(function(data) {
              $scope.member = data;
              $scope.loading = false;
            });
          };
        }
      };
    }]);
})();
