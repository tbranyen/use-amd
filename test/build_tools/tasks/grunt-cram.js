// https://gist.github.com/snichme/6378477/raw/209e81c1f3f2df70e6938d601e9be3ecb0481269/grunt-cram.js
module.exports = function(grunt) {
  'use strict';

  grunt.registerMultiTask('cram', 'Cram runner for grunt', function() {

    // Cram failed, tell grunt
    function fail (ex) {
      grunt.fail.warn('cram failed: ', ex && ex.message || ex);
      if (ex && ex.stack) console.log(ex.stack);
    }

    // If no config file was supplied, search for it in 'standard' places
    function findConfigfiles (root) {
      ['app/index.html', 'app/run.js'].reduce(function(configFiles, file) {
        if(path.exists(file)) configFiles.push(file)
        return configFiles;
      }, []);
    }

    var cram = require("cram/api"), // Maybe /api isn't the best, other alternative could be /cli
      done = this.done(), // Enable grunt async task
      options = this.options({ // Merge given options with defaults
        appRoot: '',
        output: '',
        configFiles: null,
        includes: [],
        excludes: []
      }),
      configFiles = options.configFiles || findConfigfiles(config.appRoot);

    if(configFiles.length === 0) fail("No config file given");

    // Cram the code!
    cram(configFiles, options).then(done, fail);


  });

};
