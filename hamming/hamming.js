var Hamming = function() {};

Hamming.prototype.compute = function(s,t) {
  // 1. Let the number of point mutations (hamming distance) between two
  //    DNA strands be equal to 0.
  var distance = 0;

  // 2. Let the length of the shortest DNA strand be the upper
  //    bound to iterate over.
  var maxLength = Math.min(s.length, t.length);

  // 3. If there is a mismatch between nucleic acids, increment the
  //    point mutation counter.
  for (var i = 0; i < maxLength; i++) {
    if (s[i] != t[i]) { distance += 1; }
  }

  // 4. Return the number of point mutations.
  return distance;
};

var hamming = new Hamming;

module.exports = hamming;
