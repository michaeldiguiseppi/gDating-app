(function() {
  angular.module('myApp')
    .filter('gender', function() {
      return function(input) {
        var genders = ['Male', 'Female', 'Other', 'Declined to Answer'];
        return genders[input];
      };
    });

  angular.module('myApp')
    .filter('interested', function() {
      return function(input) {
        var output = [];
        var interested = ['Males', 'Females', 'Males or Females', 'Friends Only'];
        if (input && input.length > 1) {
          input.forEach(function(interest) {
            output.push(interested[interest]);
          });
          return output.join(', ');
        } else {
          return interested[input];
        }
      };
    });
  angular.module('myApp')
    .filter('age', function() {
      return function(input) {
        if (!input) { return; }
        var today = new Date().toString().split(' ')[3];
        input = input.split('-')[0];
        return today - input;
      };
    });

  })();
