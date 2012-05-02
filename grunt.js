module.exports = function(grunt) {

  grunt.initConfig({
    
    meta: {
      banner: "/*!\n" + " * use.js v0.3.0\n" +
        " * Copyright 2012, Tim Branyen (@tbranyen)\n" +
        " * use.js may be freely distributed under" +
        " the MIT license.\n */"
    },

    lint: {
      files: ["grunt.js", "use.js"]
    },

    min: {
      "dist/use.min.js": ["<banner>", "use.js"]
    },

    watch: {
      files: "<config:lint.files>",
      tasks: "lint test"
    },

    jshint: {
      globals: {
        define: true,
        window: true
      }
    }
  });

  // Default task.
  grunt.registerTask("default", "lint min");

};
