var test = require('tape');
var encode = require('./').encode;
var decode = require('./').decode;
var each = require('foreach');

var examples = {
  'pos lat, pos lon': { lat: 10.3, lon: 25.2 },
  'pos lat, neg lon': { lat: 42.6, lon: -5.6 },
  'neg lat, pos lon': { lat: -3.0, lon: 14.5 },
  'neg lat, neg lon': { lat: -9.3, lon: -1.1 }
};

each(examples, function (example, name) {
  test(name, function (t) {
    var lat = example.lat;
    var lon = example.lon;
    var low = decode(encode(lat, lon));
    var high = decode(encode(lat, lon, 1000));
    var lowDif = Math.abs(lat - low.lat) + Math.abs(lon - low.lon);
    var highDif = Math.abs(lat - high.lat) + Math.abs(lon - high.lon);

    t.assert(Math.abs(lat - low.lat) < 1, 'lat');
    t.assert(Math.abs(lon - low.lon) < 1, 'lon');
    t.assert(lowDif > highDif, 'precision');
    t.end();
  });
});
