angular.module('drNiravPortfolio', [])
  .controller('MainController', function($scope) {
    // Main controller logic
  })
  .controller('PortfolioController', function($scope, DataService) {
    // Portfolio controller logic
  })
  .service('DataService', function() {
    // Data service logic
  })
  .directive('navbar', function() {
    return {
      // Navbar directive logic
    };
  });