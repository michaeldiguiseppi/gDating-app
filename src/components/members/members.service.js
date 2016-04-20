(function() {
  angular.module('myApp')
    .service('MemberService', MemberService);

    MemberService.$inject = ['crudService'];

    function MemberService (crudService) {
      return {
        getAll: function() {
            return crudService.getAll('members').then(function(data) {
              return data.data.data;
            });
        },
        getOne: function(id) {
          return crudService.getOne('members', id).then(function(data) {
            return data.data.data;
          });
        }
      };
    }
})();
