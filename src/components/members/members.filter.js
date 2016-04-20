angular.module('myApp')
  .filter('gender', function() {
    return function(input) {
      var genders = ['Male', 'Female', 'Other', 'Decline to Answer'];
      return genders[input];
    };
  });

  angular.module('myApp')
    .filter('interested', function() {
      return function(input) {
        var output = [];
        var interested = ['Males', 'Females', 'Males or Females', 'Friends Only'];
        if (input.length > 1) {
          input.forEach(function(interest) {
            output.push(interested[interest]);
          });
          return output.join(', ');
        } else {
          return interested[input];
        }
      };
    });
