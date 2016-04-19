// angular.module('myApp').config(function($routeProvider, $httpProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'partials/main.html',
//       preventLoggedIn: false,
//     })
//     .when('/register', {
//       templateUrl: 'partials/signup.html',
//       controller: 'signupController',
//       restricted: false,
//       preventLoggedIn: true,
//     })
//     .when('/login', {
//       templateUrl: 'partials/login.html',
//       controller: 'loginController',
//       restricted: false,
//       preventLoggedIn: true,
//     })
//     .when('/logout', {
//       restricted: false,
//       preventLoggedIn: false,
//       resolve: {
//         logout: function(authService, $location) {
//           authService.logout();
//           $location.path('/');
//         }
//       }
//     })
//     .otherwise({redirectTo: '/login'});
//   },

angular.module('myApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {

      })
      .when('/login', {
        templateUrl: 'log-in/log-in.template.html'
      })
      // .when('', {
      //
      // })
      // .when('', {
      //
      // })
      // .when('', {
      //
      // })
      // .when('', {
      //
      // })
      // .when('', {
      //
      // })
      // .when('', {
      //
      // })
      .otherwise({redirectTo: '/'});
  });
