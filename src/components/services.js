(function() {
  angular.module('myApp')
    .service('crudService', ['$http', function($http) {
      var baseUrl = 'http://galvanize-student-apis.herokuapp.com/gdating';
      return {
        getAll: function(resource) {
          return $http({
            method: 'GET',
            url: baseUrl + '/' + resource
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        getOne: function(resource, id) {
          return $http({
            method: 'GET',
            url: baseUrl + '/' + resource + '/' + id
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        insertOne: function(resource, data) {
          return $http({
            method: 'POST',
            url: baseUrl + '/' + resource,
            data: data,
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        updateOne: function(resource, id, data) {
          return $http({
            method: 'PUT',
            url: baseUrl + '/' + resource + '/' + id
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        deleteOne: function(resource, id) {
          return $http({
            method: 'DELETE',
            url: baseUrl + '/' + resource + '/' + id
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        getNumber: function(resource, limit) {
          return $http({
            method: 'GET',
            url: baseUrl + '/' + resource + '?limit=' + limit
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        getMatches: function(resource, id) {
          return $http({
            method: 'GET',
            url: baseUrl + '/' + resource + '/' + id + '/matches'
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        addMatch: function(resource, user, match) {
          return $http({
            method: 'POST',
            url: baseUrl + '/' + resource + '/' + user + '/matches',
            data: {
              id: user,
              "_match": match
            }
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
      };
    }]);

})();
