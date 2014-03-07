module.exports = ->
  @loadNpmTasks "grunt-dojo"

  @config "dojo",
    test:
      options:
        load: "build",
        dojo: "#{__dirname}/../../bower_components/dojo/dojo.js",
        require: "#{__dirname}/../../test/build_tools/dojo/main.js",
        profile: "#{__dirname}/../../test/build_tools/dojo/dojo.profile.js",
        releaseDir: "#{__dirname}/../../test/build_tools/_output"
