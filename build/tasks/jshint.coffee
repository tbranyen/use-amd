module.exports = ->
  @loadNpmTasks "grunt-contrib-jshint"

  @config "jshint", ["use.js"]
