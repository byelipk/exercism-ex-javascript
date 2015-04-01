var compare = function compare(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  // Move a to a lower index
  if (a < b) {
    return -1;
  }

  // Move a to a higher index
  if (a > b) {
    return 1;
  }

  // a must be equal to b
  return 0;
};

var normalizeWord = function anagramSort(word) {
  var normalized;

  normalized = word.split('');
  normalized = normalized.sort(compare);
  normalized = normalized.join('');

  return normalized.toLowerCase();
};

var anagram = function anagram(subject) {

  var object = {
    subject: subject,
    normalizedSubject: normalizeWord(subject),

    generateListFromArgs: function generateListFromArgs(arguments) {
      var list = [];

      if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
          list.push(arguments[i]);
        }
      } else {
        list = arguments[0];
      }

      return list;
    },

    matches: function matches() {
      var matches           = [];
      var list              = this.generateListFromArgs(arguments);
      var normalizedSubject = this.normalizedSubject;

      for (var i = 0; i < list.length; i++) {
        var candidate           = list[i];
        var normalizedCandidate = normalizeWord(candidate)

        if (candidate.toLowerCase() === subject.toLowerCase()) {
          continue;
        }

        if (normalizedCandidate === normalizedSubject) {
          matches.push(candidate);
        }
      }

      return matches;
    }
  }

  return object;
};

module.exports = anagram;
