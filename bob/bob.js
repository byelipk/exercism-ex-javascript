var Bob = function() {
  this.isShouting   = 'Whoa, chill out!',
  this.isAnswering  = 'Sure.',
  this.isAmbivalent = 'Whatever.',
  this.silentTreatment = 'Fine. Be that way!',

  this.hey = function(comment) {
    var lowerCaseComment = comment.toLowerCase(),
        upperCaseComment = comment.toUpperCase();
    
    /**
    * Only contains digits
    * */
    if (lowerCaseComment === upperCaseComment) {
      // Asking question with numbers
      if (comment.match(/[?]$/)) { return this.isAnswering; } 
    }
    
    /**
    * Uppercase strings 
    */
    if (upperCaseComment === comment) {
      // Is shouting normally, or asking a question, or not using punctuation.
      if (comment.match(/[A-Z]|[.!?]$/)) { return this.isShouting; }
    }

    // Is Asking a normal question.
    if (comment.match(/[?]$/)) { 
      return this.isAnswering; 
    }

    // Is giving the silent treatment
    if (comment.match(/^\s*$/)) { return this.silentTreatment; }
  
    // Anything else.
    return this.isAmbivalent;
  }
}
module.exports = Bob;
