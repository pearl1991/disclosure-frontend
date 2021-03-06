// Karma configuration

'use strict';

var istanbul = require('browserify-istanbul');

module.exports = function (config) {

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['browserify', 'mocha', 'chai', 'sinon', 'chai-jquery'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js', // for angular.mock.module and inject.
            'app/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: [
          'app/components/appMainModule/localityPageModule/*.js',
          'app/components/common/locality*/*.js',
          'app/components/services/*/**.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.js': ['browserify']
        },

        // karma-browserify configuration

        browserify: {
            debug: true,
            transform: ['envify', 'partialify', istanbul({
              'ignore': ['**/*.spec.js', '**/vendor/**/*.js']
            })],

            // don't forget to register the extensions
            extensions: ['.js']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'spec'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage'],

        coverageReporter: {
            dir: './reports/coverage',
            reporters: [
                {type: 'text-summary'},
                {type: 'html'}
            ]
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            // 'Chrome',
            'PhantomJS'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true

    });
};
