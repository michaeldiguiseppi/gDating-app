(function() {
  angular.module('myApp')
    .directive('members', ['MemberService', function(MemberService) {
      return {
        restrict: 'E',
        templateUrl: '/components/members/members.template.html',
        controller: function($scope, MemberService) {
          MemberService.getAll().then(function(data) {
            $scope.members = data;
          });
          $scope.getOne = function(id) {
            MemberService.getOne(id).then(function(data) {
              $scope.member = data;
            });
          };
        }
      };
    }]);
})();
