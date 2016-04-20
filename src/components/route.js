
(function() {
    angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
      //
      // For any unmatched url, redirect to /
      $urlRouterProvider.otherwise("/");
      //
      // Now set up the states
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "components/landing/landing.template.html",
          controller: 'LandingCtrl',
          authenticate: false,
          data: {
            requireLogin: false,
          }
        })
        .state('members', {
          url: "/members",
          templateUrl: "components/home/home.template.html",
          authenticate: true,
          data: {
            requireLogin: true,
          }
        })
        .state('members.member', {
          url: "^/member",
          templateUrl: "components/members/onemember.template.html",
          authenticate: true,
          data: {
            requireLogin: true,
          }
        })
        .state('login', {
          url: "/login",
          templateUrl: "components/log-in/log-in.template.html",
          controller: 'LoginCtrl',
          authenticate: false,
          data: {
            requireLogin: false,
          }
        })
        .state('register', {
          url: "/register",
          templateUrl: "components/register/register.template.html",
          controller: 'RegisterCtrl',
          authenticate: false,
          data: {
            requireLogin: false,
          }
        });
        // $httpProvider.interceptors.push('authInterceptor');
    });

    angular.module('myApp')
      .run(function($rootScope, $state, $window) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
          var requireLogin = toState.data.requireLogin;
          var currentUser = $window.localStorage.getItem('token');
          if (requireLogin && !currentUser) {
            event.preventDefault();
            $state.go('login');
          }
        });
      });

// angular.module('myApp')
//   .run(function($rootScope, $location, $window, authService) {
//     // check if token is there
//     $rootScope.$on('$stateChangeStart', function(event, next, current) {
//       // if restricted and no token
//       if (next.authenticate && !authService.isAuthenticated()) {
//         $location.path('/login');
//       }
//       // if token and prevent logged in
//       if (authService.isAuthenticated() && next.authenticate) {
//         $location.path('/');
//       }
//     });
//   });


})();
