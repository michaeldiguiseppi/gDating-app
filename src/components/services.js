(function() {
  angular.module('myApp')
    .service('crudService', ['$http', function($http) {
      var baseUrl = 'https://gdating-backend-api.herokuapp.com/gdating';
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
        getOne: function(resource, slug) {
          console.log('Slug: ', slug);
          return $http({
            method: 'GET',
            url: baseUrl + '/' + resource + '/search/' + slug
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
        search: function(resource, data) {
          var queryParams = Object.keys(data);
          var queryString = '';
          for (var i = 0; i < queryParams.length; i++) {
            queryString += queryParams[i] + '=' + data[queryParams[i]];
            if (i !== queryParams.length - 1) {
              queryString += '&';
            }
          }
          return $http({
            method: 'GET',
            url: baseUrl + '/' + resource + '/search?' + queryString + '&active=true'
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        getConversations: function(resource, user, match) {
          return $http({
            method: 'GET',
            url: baseUrl + '/' + resource + '/' + user + '/conversations/' + match,
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        addConversation: function(resource, user, match, message) {
          return $http({
            method: 'POST',
            url: baseUrl + '/' + resource + '/' + user + '/conversations',
            data: {
              content: message,
              _recipient: match
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
