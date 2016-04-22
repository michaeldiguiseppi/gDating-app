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
        if (user.data) {
          $window.localStorage.setItem('user', JSON.stringify(user.data));
        } else {
          $window.localStorage.setItem('user', JSON.stringify(user));
        }
      },
      getCurrentLocation: function() {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      },
      showPosition: function(position) {
        var latlon = position.coords.latitude + "," + position.coords.longitude;
        var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=500x500&sensor=false";
        return img_url;
      }
    };
  }

  /*
  function showPosition(position) {

}

  */
