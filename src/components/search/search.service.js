(function() {
  angular.module('myApp')
    .service('SearchService', ['crudService', function(crudService) {
      return {
        search: function(form) {
          return crudService.search('members', form).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        getOne: function(slug) {
          return crudService.getOne('members', slug).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        }
      };
    }]);
})();
