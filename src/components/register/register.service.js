(function() {
  angular.module('myApp')
    .service('RegisterService', ['$http', '$window', function($http, $window) {
      var baseUrl = 'http://galvanize-student-apis.herokuapp.com/gdating';
      return {
        register: function(data) {
          return $http({
            method: 'POST',
            url: baseUrl + '/auth/register',
            data: data,
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            console.log(err);
          });
        },
        setUserInfo: function(user) {
          $window.localStorage.setItem('user', JSON.stringify(user.data.data.user));
          $window.localStorage.setItem('token', JSON.stringify(user.data.data.token));
        }
      };
    }]);
})();
