module.exports = ->
  @loadTasks "build/tasks"

  @registerTask "test", [
    "clean"
    "requirejs"
    "qunit"
  ]

  @registerTask "default", [
    "jshint"
    "connect"
    "test"
  ]
