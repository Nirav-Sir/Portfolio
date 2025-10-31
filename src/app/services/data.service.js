class DataService {
    constructor($http) {
        this.$http = $http;
        this.portfolioData = [];
    }

    fetchPortfolioData() {
        return this.$http.get('assets/data/portfolio.json')
            .then(response => {
                this.portfolioData = response.data;
                return this.portfolioData;
            })
            .catch(error => {
                console.error('Error fetching portfolio data:', error);
                throw error;
            });
    }

    getPortfolioData() {
        return this.portfolioData;
    }
}

angular.module('drNiravPortfolio')
    .service('DataService', DataService);