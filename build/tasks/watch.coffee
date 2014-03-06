module.exports = ->
  @loadNpmTasks "grunt-contrib-watch"

  @config "watch",
    files: ["use.js", "test/**/*", "Gruntfile.coffee"]
    tasks: ["clear", "default"]
