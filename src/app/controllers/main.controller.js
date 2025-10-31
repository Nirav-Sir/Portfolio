class MainController {
    constructor() {
        this.title = 'Welcome to Dr. Nirav\'s Portfolio';
        this.description = 'This is the main page of the portfolio showcasing various projects and skills.';
    }

    // Additional methods can be added here
}

angular.module('drNiravPortfolio')
    .controller('MainController', MainController);