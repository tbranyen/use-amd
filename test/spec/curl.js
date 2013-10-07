/* 
 * Test Module: Curl
 * Ensures that use.js loads and functions in Curl.
 *
 */
QUnit.module("curl", {
  setup: function() {
    curl({
      baseUrl: "../",
      pluginPath: "bower_components/curl/src/curl/plugin/",

      paths: {
        use: "use",
        fixtures: "test/fixtures"
      }
    });
  }
});

asyncTest("Basic AMD support", 1, function() {
  curl({
    use: {
      "fixtures/basic": {
        attach: "basic"
      }
    }
  }, ["use!fixtures/basic"], function(basic) {
    ok(basic, "Basic");

    start();
  });
});

asyncTest("RequireJS shim compatibility", 2, function() {
  curl({
    use: {
      "fixtures/exports": {
        exports: "exports"
      },

      "fixtures/init": {
        init: function() {
          return this.init;
        }
      }
    }
  }, [
    "use!fixtures/exports",
    "use!fixtures/init"
  ], function(exports, init) {
    ok(exports, "Exports");
    ok(init, "Init");

    start();
  });
});
