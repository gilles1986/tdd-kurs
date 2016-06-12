module.exports = function(grunt) {
  'use strict';


  var npmTasksArray = [
    'grunt-contrib-clean',
    'grunt-contrib-watch',
    'grunt-contrib-concat',
    'grunt-contrib-copy',
    'grunt-karma',
    'grunt-contrib-connect'
  ];


  // DON'T TOUCH THE CONFIG BELOW IF YOU DON'T KNOW WHAT YOU DO

  for(var i = 0; i < npmTasksArray.length; i++) {
    grunt.loadNpmTasks(npmTasksArray[i]);
  }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      scripts: [
        'web/includes/js/*'
      ],
      project: [
        'bower_components',
        'reports'
      ]
    },

    concat: {



      scripts: {
        src: [
          'assets/javascript/dev/_tmp/dev.js',
          'assets/javascript/scripts/*.js'
        ],
        dest: 'assets/javascript/_work/scripts.js'
      },
      libs: {
        src: [
          "assets/javascript/lib/base/jquery.min.js",
          "assets/javascript/lib/base/bootstrap.min.js",
          "assets/javascript/lib/base/enquire.min.js",
          "assets/javascript/lib/base/bowser.min.js",
          "assets/javascript/lib/base/is.min.js",
          "assets/javascript/lib/base/AbstractComponent.js",
          "assets/javascript/lib/base/AbstractResponsiveComponent.js",
          "assets/javascript/lib/base/bootstrapMediaquerys.js",
          "assets/javascript/lib/*.js"
        ],
        dest: 'assets/javascript/_work/libs.js'
      }
    },

    copy: {

      jstoweb: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true,
            src: ['js/src/**.js'],
            dest: 'web/includes/js/',
            filter: 'isFile',
            flatten: true
          },
          {
            expand: true,
            src: ['js/lib/**/*.js'],
            dest: 'web/includes/js/lib',
            filter: 'isFile',
            flatten: true
          }
        ]
      }
    },


    watch: {
      scripts: {
        files: [
          'js/src/**/*.js'
        ],
        tasks: ['js']
      },
      libs: {
        files: [
          'js/libs/**/*.js'
        ],
        tasks: ['js']
      },
      options: {
        debounceDelay: 5000,
        atBegin: true,
        "livereload" : false
      }
    },
    karma: {
      unit: {
        configFile: 'karmaconfig.js',
        singleRun: true,
        browsers: ["PhantomJS"]
      },
      debug: {
        configFile: 'karmaconfig.js',
        singleRun: false,
        browsers: ["Chrome"],
        preprocessors: {'js/test/html_fixtures/*.html': []}
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'web',
          open: true,
          keepalive: true
        }
      }
    }
  });

  // Eigene Tasks

  grunt.registerTask('default', [ "js"]);

  grunt.registerTask('project-clean', 'clean:project');


  grunt.registerTask('js', ["runTests", "clean", "copy"]);

  grunt.registerTask('runTests', ['karma:unit']);
  grunt.registerTask("html-server", "connect:server");
  grunt.registerTask('watchJS', ['watch']);

};