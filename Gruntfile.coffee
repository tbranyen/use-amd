module.exports = ->
  @initConfig

    jshint: ["use.js"]

    connect:
      test: {}
      server:
        options:
          keepalive: true

    watch:
      files: ["use.js", "test/**/*", "Gruntfile.coffee"]
      tasks: ["clear", "default"]

    qunit:
      test:
        options:
          urls: [
            "http://localhost:8000/test/requirejs.html"
            "http://localhost:8000/test/dojo.html"
            "http://localhost:8000/test/curl.html"
          ]

  @loadNpmTasks "grunt-contrib-jshint"
  @loadNpmTasks "grunt-contrib-watch"
  @loadNpmTasks "grunt-contrib-connect"
  @loadNpmTasks "grunt-contrib-qunit"
  @loadNpmTasks "grunt-clear"

  @registerTask "default", ["jshint", "connect:test", "qunit"]
