module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    jshint: {
      files: ['grunt.js', 'tasks/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    cucumberjs: {
      files: 'features',
      options: {
        steps: 'features',
        format: 'pretty',
        coffee: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['jshint', 'cucumberjs']);
};
