
(function() {
    angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider) {
      //
      // For any unmatched url, redirect to /
      $urlRouterProvider.otherwise("/");
      //
      // Now set up the states
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "js/home/home.template.html"
        })
        .state('home.members', {
          url: "^/members",
          templateUrl: "js/members/onemember.template.html",
        })
        .state('login', {
          url: "/login",
          templateUrl: "js/log-in/log-in.template.html"
        })
        .state('register', {
          url: "/register",
          templateUrl: "js/register/register.template.html"
        });
    });
})();
