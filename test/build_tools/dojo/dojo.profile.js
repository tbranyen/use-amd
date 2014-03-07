var profile = {
  basePath: "./",
  action: "release",

  packages: [
    { name: "dojo-test", location: "." },
    { name: "use", location: ".", main: "use.js" }
  ],

  layers: {
    "dojo-test/main": {}
  }
};
