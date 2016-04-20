(function() {
  angular.module('myApp')
    .service('crudService', ['$http', function($http) {
      var baseUrl = 'http://galvanize-student-apis.herokuapp.com/gdating';
      return {
        getAll: function(resource) {
          return $http({
            method: 'GET',
            url: baseUrl + '/' + resource + '?limit=10'
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
        }
      };
    }]);

  //   angular.module('myApp')
  //     .service('authService', ['$http', '$window', function($http, $window) {
  //       var user = {};
  //       return {
  //         logout: function(user) {
  //           user = null;
  //           $window.localStorage.clear();
  //           $window.location.href = '/';
  //         },
  //         setUserInfo: function(userData) {
  //           $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
  //           $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
  //         },
  //         getUserInfo: function() {
  //           return $window.localStorage.getItem('user');
  //         },
  //         isAuthenticated: function() {
  //           return ($window.localStorage.getItem('user') && $window.localStorage.getItem('token'));
  //         }
  //       };
  //     }]);
  //
  // angular.module('myApp')
  //   .service('authInterceptor', ['$window', function($window){
  //     return {
  //       // always make sure to return anything you use here!
  //       request: function(config){
  //         // check for token in headers
  //         // config.headers['X-requested-with'] = XMLHttpRequest;
  //         var token = $window.localStorage.getItem('token');
  //         if (token) {
  //           config.headers.Authorization = "Bearer " + token;
  //         }
  //         return config;
  //       },
  //       responseError: function(err){
  //         // if header auth is not present throw an error
  //         return err;
  //       }
  //     };
  //   }]);

})();
