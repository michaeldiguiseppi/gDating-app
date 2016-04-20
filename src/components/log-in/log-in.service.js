(function() {
  angular.module('myApp')
    .service('LoginService', ['$http', '$window', function($http, $window) {
      var baseUrl = 'http://galvanize-student-apis.herokuapp.com/gdating';
      return {
        login: function(data) {
          return $http({
            method: 'POST',
            url: baseUrl + '/auth/login',
            data: data,
          }).then(function(data) {
            console.log('Token: ', data);
            return data;
          });
        },
        setUserInfo: function(user) {
          $window.localStorage.setItem('user', JSON.stringify(user.data.data.user));
          $window.localStorage.setItem('token', JSON.stringify(user.data.data.token));
        }
      };
    }]);
})();
