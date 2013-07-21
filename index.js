var sortable = require('sortable-hash');

var geo = {};

geo.decode = function (hash) {
  var decoded = sortable.decode(hash, 2);
  return {
    lat: decoded[1] / 100 * 90,
    lon: decoded[0] / 100 * 180
  };
}

geo.encode = function (latitude, longitude, precision) {
  return sortable.encode([
    longitude / 180 * 100,
    latitude / 90 * 100
  ], precision);
}

module.exports = geo;
