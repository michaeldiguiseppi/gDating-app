
(function() {
    angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "components/landing/landing.template.html",
          controller: 'LandingCtrl',
          authenticate: false,
          data: {
            requireLogin: false,
            blockLogin: true,
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
        .state('members.view', {
          url: "/view?id",
          templateUrl: "components/members/onemember.template.html",
          authenticate: true,
          controller: function($scope, $rootScope, $state, $stateParams, ProfileService, MemberService) {
            $scope.matched = false;
            $scope.liked = false;
            $scope.getMatches = function() {
              var currentUser = JSON.parse($rootScope.currentUser);
              MemberService.getMatches(currentUser._id).then(function(data) {
                if (data.indexOf(currentUser._id) !== -1) {
                  $scope.liked = true;
                }
              });
            };
            MemberService.getOne($stateParams.id)
              .then(function(member) {
                $scope.member = member;
                var currentUser = JSON.parse($rootScope.currentUser);
                $scope.getMatches();
                if (currentUser._matches.indexOf($scope.member._id) !== -1) {
                  $scope.matched = true;
                }
              });
            $scope.addMatch = function() {
              var currentUser = JSON.parse($rootScope.currentUser);
              MemberService.addMatch(currentUser._id, $scope.member._id).then(function(data) {
                ProfileService.setSecondaryInfo(data);
                $scope.matched = true;
              });
            };

          },
          data: {
            requireLogin: true,
          }
        })
        .state('members.search', {
          url: "/search",
          templateUrl: "components/search/search.template.html",
          authenticate: false,
          controller: 'SearchCtrl',
          data: {
            requireLogin: true,
          }
        })
        .state('profile', {
          url: "/profile",
          templateUrl: "components/profile/profile.template.html",
          authenticate: false,
          controller: function($scope, $rootScope, MemberService, ProfileService) {
              var currentUser = JSON.parse($rootScope.currentUser);
              var id = currentUser._id;
              MemberService.getOne(id)
                .then(function(data) {
                  $scope.user = data;
                  $scope.user.dob = new Date(data.dob);
                });
            var data = {
              coords: {
                latitude: currentUser.address.geo.lat,
                longitude: currentUser.address.geo.lng,
              }
            };
            $scope.img_url = ProfileService.showPosition(data);
            $scope.edit = function() {
              ProfileService.edit($scope.user, JSON.parse($rootScope.currentUser)._id).then(function(data) {
                ProfileService.setSecondaryInfo(data.data);
              });
            };
          },
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
            blockLogin: true,
          }
        })
        .state('register', {
          url: "/register",
          templateUrl: "components/register/register.template.html",
          controller: 'RegisterCtrl',
          authenticate: false,
          data: {
            requireLogin: false,
            blockLogin: true,
          }
        })
        .state('logout', {
          authenticate: false,
          controller: function($scope, $rootScope, LoginService) {
            function logout () {
              LoginService.logout($rootScope.currentUser);
            }
            logout();
          },
          data: {
            requireLogin: true,
          }
        });
    });

    angular.module('myApp')
      .run(function($rootScope, $state, $window) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
          var requireLogin = toState.data.requireLogin;
          var blockLogin = toState.data.blockLogin;
          $rootScope.currentUser = $window.localStorage.getItem('user');
          if (requireLogin && !$rootScope.currentUser) {
            event.preventDefault();
            $state.go('login');
          }
          if (blockLogin && $rootScope.currentUser) {
            event.preventDefault();
            $state.go('members');
          }
        });
      });

})();
