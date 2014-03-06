module.exports = ->
  @loadNpmTasks "grunt-contrib-qunit"

  @config "qunit",
    test:
      options:
        urls: [
          "http://localhost:8000/test/requirejs.html"
          "http://localhost:8000/test/dojo.html"
          "http://localhost:8000/test/curl.html"
        ]
