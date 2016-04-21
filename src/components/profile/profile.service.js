angular.module('myApp')
  .service('ProfileService', ProfileService);

  ProfileService.$inject = ['$http', '$window'];

  function ProfileService ($http, $window) {
    var baseUrl = 'http://galvanize-student-apis.herokuapp.com/gdating';
    return {
      edit: function(data, id) {
        return $http({
          method: 'PUT',
          url: baseUrl + '/members/' + id,
          data: data,
        }).then(function(data) {
          return data;
        }).catch(function(err) {
          return err;
        });
      },
      setUserInfo: function(user) {
        $window.localStorage.setItem('user', JSON.stringify(user.data.data.user));
        $window.localStorage.setItem('token', JSON.stringify(user.data.data.token));
      },
      setSecondaryInfo: function(user) {
        $window.localStorage.setItem('user', JSON.stringify(user.data));
      }
    };
  }
