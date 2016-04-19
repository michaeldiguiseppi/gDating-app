(function() {
  angular.module('myApp')
    .directive('members', ['MemberService', function(MemberService) {
      return {
        restrict: 'E',
        templateUrl: '/js/members/members.template.html',
        controller: function($scope, MemberService) {
          MemberService.getAll().then(function(data) {
            $scope.members = data;
          });
        }
      };
    }]);
})();
