{
    "name": "dr-nirav-portfolio",
    "version": "1.0.0",
    "description": "Portfolio site (AngularJS) for Dr Nirav",
    "main": "src/index.html",
    "scripts": {
        "start": "npm run serve",
        "serve": "browser-sync start --server \"src\" --files \"src/**/*\" --no-open",
        "build": "gulp build",
        "dev": "gulp",
        "test": "karma start --single-run",
        "lint": "eslint \"src/**/*.js\""
    },
    "author": "Dr Nirav",
    "license": "MIT",
    "dependencies": {
        "angular": "^1.8.3",
        "angular-route": "^1.8.3",
        "bootstrap": "^5.3.2"
    },
    "devDependencies": {
        "browser-sync": "^2.27.11",
        "del": "^6.1.1",
        "eslint": "^8.50.0",
        "gulp": "^4.0.2",
        "gulp-autoprefixer": "^8.0.0",
        "gulp-clean-css": "^4.3.0",
        "gulp-concat": "^2.6.1",
        "gulp-htmlmin": "^5.0.1",
        "gulp-if": "^3.0.0",
        "gulp-rename": "^2.0.0",
        "gulp-sourcemaps": "^3.0.0",
        "gulp-uglify": "^3.0.2",
        "karma": "^6.4.2",
        "karma-chrome-launcher": "^3.2.0",
        "karma-coverage": "^2.2.0",
        "karma-jasmine": "^5.1.1",
        "karma-cli": "^2.0.0",
        "jasmine-core": "^4.5.0"
    }
}