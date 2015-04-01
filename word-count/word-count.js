var uniqueArray = function(a) {
  return a.reduce(function(p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, []);
};

var cleanAndTokenizeString = function(string) {
  var punctuationless, withNewlines, finalString;

  punctuationless = string.replace(/[\.,-\/¡¿?@#!$%\^&\*;:{}=\-_`~()]/g,"");
  withNewlines = punctuationless.replace(/[\n]/g, " ");
  finalString = withNewlines.replace(/\s{2,}/g," ");

  return finalString.split(/ /);
};

var words = function(string) {
  var tokens, tokenMap, tokenHash;
  
  // Split the string into an array
  tokens = cleanAndTokenizeString(string);
 
  // Initialize the tokenMap as an array
  tokenMap = uniqueArray(tokens);
  
  // Initialize tokenHash as an empty object
  tokenHash = {};

  for (var i = 0; i < tokenMap.length; i++) {
    var count = 0,
        token = tokenMap[i].toLowerCase();

    for (n = 0; n < tokens.length; n++) {
      if (token === tokens[n].toLowerCase()) {
        count += 1;
      }
    }

    tokenHash[token] = count;
  }

  return tokenHash;
}

module.exports = words;
