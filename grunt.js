module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      files: ["grunt.js", "use.js"]
    },

    min: {
      "dist/use.min.js": "use.js"
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
