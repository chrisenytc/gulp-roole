# Gulp Roole
[![Build Status](https://travis-ci.org/chrisenytc/gulp-roole.png?branch=master)](https://travis-ci.org/chrisenytc/gulp-roole) [![Dependency Status](https://gemnasium.com/chrisenytc/gulp-roole.png)](https://gemnasium.com/chrisenytc/gulp-roole) [![NPM version](https://badge-me.herokuapp.com/api/npm/gulp-roole.png)](http://badges.enytc.com/for/npm/gulp-roole) [![Coverage Status](https://coveralls.io/repos/chrisenytc/gulp-roole/badge.png)](https://coveralls.io/r/chrisenytc/gulp-roole) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/chrisenytc/gulp-roole/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
> A plugin for Gulp to Compile Roole files to CSS

## Usage

First, install `gulp-roole` as a development dependency:

```shell
npm install --save-dev gulp-roole
```

Then, add it to your `gulpfile.js`:

```javascript
var roole = require("gulp-roole");
var options = {};

gulp.src("./src/*.roo")
	.pipe(roole(options))
	.pipe(gulp.dest("./dist"));
```

## API

### roole(options)

#### options.base
Type: `String`

An absolute path. Relative paths do not start with ./ and ../ are relative this path. If no specified, these relative paths are not translated.

#### options.filename
Type: `String`
Default value: `base`

The absolute path of the file containg this Roole code. Relative paths starting with ./ or ../ are relative to the directory of this path. If not specified, these relative paths are relative to the value of the base option. If that's also unspecified, these relative paths are not translated.

#### options.out
Type: `String`
Default value: `base`

The absolute path of the directory where the file containing the generated CSS code lives. Translated relative paths are relative to this directory.

#### options.indent
Type: `String`
Default value: `'\t'`

A indentation string to use in CSS.

#### options.precision
Type: `Integer`
Default value: `3`

Max number of decimal digits to use in CSS

#### options.prefix
Type: `String`
Default value: `'webkit moz ms o'`

A space-separated vendor names to use for prefixing.

#### options.skipPrefixed
Type: `Boolean`
Default value: `false`

Not generate prefixed rule that already exists.

#### options.imports
Type: `JSON Object`
Default value: `{}`

An object literal containing the files to be imported. When a file that needs to be imported exists in this object, it will be used directly and no external requests are made.

The key is the absolute file path, and the value is the file content.

When CSS is generated, this option will contain the files that have been imported.

#### options.global
Type: `JSON Object`
Default value: `{}`

An literal object containing global variables that will be defined for the code. The key is the variables name, the value is the variable value.

Values are converted to Roole values the same way as how the returning values of [builtin functions](http://roole.org/api/#builtin) are converted.


## License

Copyright 2014 Christopher EnyTC

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

