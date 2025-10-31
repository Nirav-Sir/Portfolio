angular.module('drNiravPortfolio')
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/directives/navbar.template.html',
      controller: function($scope) {
        // Navbar controller logic can be added here
      }
    };
  });