// Karma configuration
// Generated on Sat Jan 18 2014 18:24:36 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'js/test/lib/jasmine-fixture.min.js',
      "js/lib/base/jquery.min.js",
      'js/test/lib/jasmine-jquery.js',
      'js/test/fixtures/fixtures_config.js',

      {pattern: 'js/src/**/*.js', watched: true},
      {pattern: 'js/test/unit/**/*.js', watched: true},
      {pattern: 'assets/javascript/test/fixtures/*.html', watched: true} // fixtures loading
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage', "verbose"],
    preprocessors: {  'js/src/**/*.js': ['coverage'],
                      'js/test/fixtures/*.html': []},

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    coverageReporter: {
      type:   'lcov',
      dir:    'reports',
      subdir: 'coverage'
    }
  });
};
