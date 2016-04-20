(function() {
  angular.module('myApp')
    .controller('LandingCtrl', LandingCtrl);

  LandingCtrl.$inject = ['$scope', 'crudService'];

  function LandingCtrl ($scope, crudService) {
    function getNumber(num) {
      return crudService.getNumber('members', num).then(function(data) {
        console.log(data);
        $scope.members =  data.data.data;
      });
    }
    getNumber(3);
  }
})();
