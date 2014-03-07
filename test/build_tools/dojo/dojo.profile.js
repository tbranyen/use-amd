var profile = {
  basePath: "./",
  action: "release",

  plugins: {
    "use": "/home/tim/git/use-amd/use.js"
  },

  packages: [
    { name: "dojo-test", location: "." }
  ],

  layers: {
    "dojo-test/main": {
      include: [
        "use!./fixtures/basic.js"
      ]
    }
  }
};
