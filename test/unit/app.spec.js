describe('App Module', function() {
    beforeEach(module('drNiravPortfolio'));

    it('should be defined', inject(function($injector) {
        var appModule = $injector.get('drNiravPortfolio');
        expect(appModule).toBeDefined();
    }));
});

describe('MainController', function() {
    var $controller;

    beforeEach(module('drNiravPortfolio'));

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it('should initialize with default values', function() {
        var controller = $controller('MainController');
        expect(controller).toBeDefined();
        // Add more expectations based on the controller's properties
    });
});

describe('PortfolioController', function() {
    var $controller, $scope, DataService;

    beforeEach(module('drNiravPortfolio'));

    beforeEach(inject(function(_$controller_, _$rootScope_, _DataService_) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        DataService = _DataService_;
    }));

    it('should fetch portfolio items', function() {
        var controller = $controller('PortfolioController', { $scope: $scope, DataService: DataService });
        expect(controller).toBeDefined();
        // Add more expectations based on the controller's methods and data
    });
});