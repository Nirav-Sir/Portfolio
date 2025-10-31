class PortfolioController {
    constructor(DataService) {
        this.dataService = DataService;
        this.portfolioItems = [];
        this.loadPortfolioItems();
    }

    loadPortfolioItems() {
        this.dataService.getPortfolioItems().then(items => {
            this.portfolioItems = items;
        });
    }
}

angular.module('drNiravPortfolio').controller('PortfolioController', PortfolioController);