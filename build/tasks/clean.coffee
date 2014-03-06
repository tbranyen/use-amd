module.exports = ->
  @loadNpmTasks "grunt-contrib-clean"

  @config "clean", ["test/build_tools/_output"]
