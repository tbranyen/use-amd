var profile = {
	basePath: "./",
	action: "release",

  plugins: {
    "use": "use.js"
  },

  packages: [
    { name: "dojo-test", location: "." }
  ],

	layers: {
		"dojo-test/main": {}
	}
};
