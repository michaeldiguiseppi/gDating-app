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
        getOne: function(slug) {
          return crudService.getOne('members', slug).then(function(data) {
            return data.data.data;
          });
        },
        getMatches: function(id) {
          return crudService.getMatches('members', id).then(function(data) {
            return data.data.data;
          });
        },
        addMatch: function(user, match) {
          return crudService.addMatch('members', user, match).then(function(data) {
            return data.data.data;
          });
        },
        getConversations: function(user, match) {
          return crudService.getConversations('members', user, match).then(function(data) {
            return data.data.data;
          });
        },
        addConversation: function(user, match, message) {
          return crudService.addConversation('members', user, match, message).then(function(data) {
            return data;
          });
        }
      };
    }
})();
