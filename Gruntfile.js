module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      task: {
        src: [
        'index.html'
        ],
        exclude: ['jquery.js']
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'dist/progressbar.css': 'src/progressbar.scss'
        }
      }
    },
    coffee: {
      compileBare: {
        options: {
          bare: true
        },
        files: {
          'dist/main.js': 'src/main.coffee'
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.scss', '**/*.coffee'],
        tasks: ['sass', 'coffee'],
        options: {
          spawn: false,
        },
      },
    },
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'build',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },
    rename: {
      css: {
        files: [{
          src: ['build/app.css'],
          dest: 'build/<%= pkg.name %>.<%= pkg.version %>.min.css'
        }]
      },
      js: {
        files: [{
          src: ['build/app.js'],
          dest: 'build/<%= pkg.name %>.<%= pkg.version %>.min.js'
        }]
      }
    },
    wrap: {
      basic: {
        src: ['build/<%= pkg.name %>.<%= pkg.version %>.min.js'],
        dest: 'build/<%= pkg.name %>.<%= pkg.version %>.min.js',
        options: {
          wrapper: ['(function($) {\n', '\n}).call(window.jQuery)']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-wrap');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-usemin');

  // Default task(s).
  grunt.registerTask('default', [
  'useminPrepare',
  'concat',
  'uglify',
  'cssmin',
  'rename',
  'wrap'
  ]);

};
