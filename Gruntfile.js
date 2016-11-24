module.exports = function(grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-eslint');


    grunt.initConfig({
        eslint: {
            target: [
                'src/lib/*.js'
            ]
        },
        jasmine: {
            unit: {
                src: 'src/lib/**/*.js',
                options: {
                    specs: 'src/test/*-spec.js'
                }
            }
        }
    });

    grunt.registerTask('test', [
        'eslint',
        'jasmine'
    ]);
}