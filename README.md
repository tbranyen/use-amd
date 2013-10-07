use.js
======

[![Build Status](https://travis-ci.org/tbranyen/use.js.png?branch=master)](https://travis-ci.org/tbranyen/use.js)
  
Created by Tim Branyen [@tbranyen](http://twitter.com/tbranyen)

By default AMD loaders do not know how to load anything that wasn't defined in
the AMD syntax.  This plugin allows you to map the proper dependencies  and
attaches the specified global object to the module exports.

This plugin *does not* modify library source code.  It executes scripts as they
were intended and tested.

### Installing: ###

This plugin has been registered with Bower, install with:

``` bash
bower install use-amd
```

Alternatively you can download the `use.js` file and place anywhere in your
project.

### Loading the plugin: ###

``` javascript
require.config({
  paths: {
    "use": "path/to/use-amd/use"
  }
});
```

You must not end the path in `.js` unless you are providing a url.

Examples:

* `vendor/libraries/use`
* `http://cdn.mysite.com/vendor/libraries/use.js`

### Configuring: ###

The string property used in `attach` will resolve to `window[stringProp]`
Functions are evaluated in the scope of the window and passed all dependencies
as arguments.

``` javascript
require.config({
  use: {
    "underscore": {
      attach: "_"
    },
 
    "backbone": {
      deps: ["use!underscore", "jquery"],
      attach: function(_, $) {
        return Backbone;
      }
    }
  }
});
```

### Requiring a module: ###

To require a module you simply use the `require` function as usual, except
prefix the script name with `use!` the `!` tells the loader its a plugin.

``` javascript
require(["use!backbone"], function(Backbone) {
  console.log(Backbone); // is Backbone!
});
```

### Using shim syntax: ###

After use.js was released, RequireJS bundled its own implementation and did a
much better job at the naming and API.  Use.js is now compatible with the
syntax within RequireJS.

``` javascript
require.config({
  paths: {
    "module/a": "/path/to/module/a",
    "module/b": "/path/to/module/b",
    "module/c": "/path/to/module/c",

    // You may want to change the plugin name to shim as well.
    "shim": "/path/to/use"
  },

  shim: {
    "module/a": {
      deps: ["module/b"],
      exports: "A"
    },

    "module/b": ["module/c"],

    "module/c": {
      init: function() {
        return this.c;
      }
    },
  }
});

require(["shim!backbone"], function(Backbone) {
  console.log(Backbone); // is Backbone!
});
```

### Using with Dojo: ###

Ensure Dojo's loader is in `async` mode:

``` html
<script data-dojo-config="async:1" src="dojo/dojo.js"></script>
```

Set up your configuration:

``` javascript
require({
  paths: {
    "module/a": "/path/to/module/a",
    "module/b": "/path/to/module/b",
    
    "use": "path/to/use"
  },

  use: {
    "module/a": {
      deps: ["module/b"],
      attach: "A"
    }
  }
});
```

And finally Require in your shimmed module:

``` javascript
require(["use!module/a"], function(A) {
  console.log(A); // is A!
});
```

### Using with Curl: ###

Set up your configuration, Curl support relies on the built-in `js!` plugin,
so ensure the `pluginPath` is set to Curl's internal cache:

``` javascript
curl.config({
  pluginPath: "curl/src/curl/plugin/",

  paths: {
    "module/a": "/path/to/module/a",
    "module/b": "/path/to/module/b",
    
    "use": "path/to/use"
  },

  use: {
    "module/a": {
      deps: ["module/b"],
      attach: "A"
    }
  }
});
```

And finally Curl in your shimmed module:

``` javascript
curl(["use!module/a"], function(A) {
  console.log(A); // is A!
});
```

### Running tests ###

You will need Node.js and Grunt installed to run tests.

Clone this project, open the directory in a terminal, and execute the following
commands:

``` bash
# Install dependencies.
npm i -q

# Run the tests.
grunt
```

You can also run an http-server in the root and hit the tests directly.  Since
XHR is used, tests must be run from a server.

### Release notes: ###

#### 0.4.0 ####

* Upgraded to use Grunt 0.4.
* Registered on Bower.
* Tested with RequireJS, Dojo, and Cujo.
* RequireJS shim implementation support.

#### 0.3.0 ####

* Dojo AMD loader support
* Node.js (maybe others w/o window object) compatibility
* Several fixes with how r.js builds out modules
* Support for wrap=true

#### 0.2.0 ####

* Added `write` method that ensures compatibility in loader environments that
  do not give access to the configuration object
* Published to GitHub as a repo

#### 0.1.0 ####

* Initial release, allows non-amd compatible JavaScript to load
* Gist only
