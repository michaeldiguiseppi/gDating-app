(function() {
  angular.module('myApp')
    .service('LandingService', LandingService);

    LandingService.$inject = ['crudService'];

    function LandingService (crudService) {
      return {
        getThree: function() {
            return crudService.getNumber('members', 3).then(function(data) {
              return data.data.data;
            });
        }
      };
    }
})();
