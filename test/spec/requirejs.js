/* 
 * Test Module: RequireJS
 * Ensures that use.js loads and functions in RequireJS.
 *
 */
QUnit.module("requirejs", {
  setup: function() {
    require.config({
      baseUrl: "../",

      paths: {
        use: "use",
        fixtures: "test/fixtures"
      }
    });
  }
});

asyncTest("Basic AMD support", 1, function() {
  require({
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

asyncTest("RequireJS shim compatibility", 3, function() {
  require({
    use: {
      "fixtures/exports": {
        exports: "exports"
      },

      "fixtures/init": {
        init: function() {
          return this.init;
        }
      },

      "fixtures/array_exports": ["fixtures/depends"]
    }
  }, [
    "use!fixtures/exports",
    "use!fixtures/init",
    "use!fixtures/array_exports"
  ], function(exports, init, array_exports) {
    ok(exports, "Exports");
    ok(init, "Init");
    ok(require("fixtures/depends"), "Depends");

    start();
  });
});
