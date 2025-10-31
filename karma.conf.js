module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'angular-filesort'],
        files: [
            'src/assets/**/*.js',
            'src/app/**/*.js',
            'test/unit/**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {
            'src/app/**/*.js': ['ng-annotate'],
            'test/unit/**/*.spec.js': ['ng-annotate']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    });
};