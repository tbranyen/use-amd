module.exports = ->
  @loadNpmTasks "grunt-contrib-qunit"

  @config "qunit",
    test:
      options:
        urls: [
          "http://localhost:7357/test/requirejs.html"
          "http://localhost:7357/test/dojo.html"
          "http://localhost:7357/test/curl.html"
        ]
