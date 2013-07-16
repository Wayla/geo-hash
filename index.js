var bits = [16, 8, 4, 2, 1];
var base32 = '0123456789bcdefghjkmnpqrstuvwxyz';

var geo = {};

geo.decode = function (hash) {
  var even = true;
  var lat = [-90, 90];
  var lon = [-180, 180];
  
  for (var i = 0; i < hash.length; i++) {
    var c = hash[i];
    var idx = base32.indexOf(c);

    for (var j = 0; j < bits.length; j++) {
      var cord = even? lon : lat;
      var side = Number(!(idx & bits[j]));
      cord[side] = avg(cord);
      even = !even;
    }
  }

  return { lat: avg(lat), lon: avg(lon) };
}

geo.encode = function (latitude, longitude, precision) {
  var even = true;
  var lat = [-90, 90];
  var lon = [-180, 180];
  var bit = 0;
  var ch = 0;
  if (typeof precision != 'number') precision = 12;

  var hash = '';
  
  while (hash.length < precision) {
    var cord = even? lon : lat;
    var arg = even? longitude : latitude;
    var mid = avg(cord);

    if (arg > mid) {
      ch |= bits[bit];
      cord[0] = mid;
    } else {
      cord[1] = mid;
    }

    even = !even;

    if (bit < 4) {
      bit++;
    } else {
      hash += base32[ch];
      bit = 0;
      ch = 0;
    }
  }

  return hash;
}

module.exports = geo;

function avg (arr) {
  return (arr[0] + arr[1]) / 2;
}
