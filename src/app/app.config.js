angular.module('drNiravPortfolio', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/main.html',
            controller: 'MainController'
        })
        .when('/portfolio', {
            templateUrl: 'app/views/portfolio.html',
            controller: 'PortfolioController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);