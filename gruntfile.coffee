genanimate = require 'genanimate'
module.exports = (grunt)->
  grunt.loadNpmTasks "grunt-genanimate"
  grunt.initConfig
    genanimate:
      options:
        animate_dir: 'app/assets/animate'
        src: ['mock']
        html_gen_path: 'app/templates'
        images_gen_path: 'app/assets/images'

