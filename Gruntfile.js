module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'expanded'
        },
        files: { 'src/css/global.css' : 'src/scss/global.scss'    // Dictionary of files 
        
        }
      }
    },
    concat: {
      
    dist: {
      src: ['src/javascript/**/*.js'],
      dest: 'src/js/production.js',
    },
  },

watch: {
    scripts: {
      files: ['src/javascript/*js','src/javascript/*.scss','scr/'],
      task: ['watch','sass','concat'],
      options :{
        spawn: false,
      },
    },
  },

  browserSync: {
    bsFiles: {
        src : ['src/css/*.css','src/js/*.js','src/*.html']
    },
    options: {
      watchTask: true,
        server: {
            baseDir: "./src"
        }
    }
  }
});

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['browserSync','sass','concat','watch']);

    grunt.loadNpmTasks('grunt-browser-sync');
};