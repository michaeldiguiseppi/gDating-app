(function() {
  angular.module('myApp')
    .service('MemberService', MemberService);

    MemberService.$inject = ['crudService'];

    function MemberService (crudService) {
      return {
        getAll: function() {
            return crudService.getAll('members').then(function(data) {
              console.log(data.data.data[0]);
              return data.data.data;
            });
        }
      };
    }
})();
