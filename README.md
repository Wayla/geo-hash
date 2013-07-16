
# geo-hash

Decode/Encode [geohashes](http://en.wikipedia.org/wiki/Geohash).

[![build status](https://secure.travis-ci.org/Wayla/geo-hash.png)](http://travis-ci.org/Wayla/geo-hash)

[![testling badge](https://ci.testling.com/Wayla/geo-hash.png)](https://ci.testling.com/Wayla/geo-hash)

## Usage

```js
var geo = require('geo-hash');

var hash = geo.encode(10.3, -2.4);
// => 'ecy697h3ggnm'

var pos = geo.decode(hash);
// => { lat: 10.300000039860606,
//      lon: -2.3999998904764652 }
```

## API

### decode(hash)

Decode the given geohash into an object with keys `lat` and `lon`.

### encode(lat, lon[, precision])

Encode the given latitude/longitude pair into a geohash. If no precision is
provided it defaults to `12` characters.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install geo-hash
```

## License

Copyright (c) 2013 Julian Gruber &lt;julian@wayla.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
