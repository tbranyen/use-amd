module.exports = ->
  @loadNpmTasks "grunt-contrib-connect"

  @config "connect",
    test:
      options:
        port: 7357
