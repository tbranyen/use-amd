use.js
======
  
Created by Tim Branyen [@tbranyen](http://twitter.com/tbranyen)

Using AMD shouldn't be painful, but unfortunately like many facets of life,
using incompatible code doesn't work out the way you would expect.  Especially
when they have dependencies of their own.

Use.js has been written to work with RequireJS specifically, but its possible
that it will work with other AMD loaders/builders as well.

I like RequireJS and I like AMD, this plugin addresses the issue that many
others have tackled in the wrong way.  Before this plugin it was common to
*directly* modify library source code, create separate "shim" files, or load
the scripts without regard for their dependencies or associated object.

This plugin *does not* modify library source code and executes the scripts
as they were intended and tested.  It simply ensures the proper dependencies
have loaded and attaches the specified global object to the module definition.

## Download & Include ##

Development is fully commented source, Production is minified and stripped of
all comments except for license/credits.

* [Development](https://raw.github.com/tbranyen/use.js/master/use.js)
* [Production](https://raw.github.com/tbranyen/use.js/master/dist/use.min.js)

You need to set the path of use to its location (I typically put it in a
plugins folder)

``` javascript
require.config({
  paths: {
    "use": "path/to/use"
  }
});
```

## Usage ##

You must define a configuration for each incompatible script you wish to
include.

### Configuration format ###

The string property used in attach will resolve to `window[stringProp]`
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

### Requiring a module ###

To require a module you simply use the `require` function as usual, except
prefix the script name with `use!` the `!` tells the loader its a plugin.

``` javascript
require(["use!backbone"], function(Backbone) {
  console.log(Backbone); // is Backbone!
});
```

## Release History ##

### 0.2.0 ###

* Added `write` method that ensures compatibility in loader environments that
do not give access to the configuration object
* Published to GitHub as a repo

### 0.1.0 ###

* Initial release, allows non-amd compatible JavaScript to load
* Gist only
