module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9090,
                    base: ''
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'js/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/app.min.css': 'scss/app.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass:dev']
            },
            js: {
                /* the same files I told JSHint to check */
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            }



        }

    });


    /* Default task. Run `grunt` on the command line */
    grunt.registerTask('default', [
        'connect',
        'jshint',
        'sass:dev',
        'watch'
    ]);


};


