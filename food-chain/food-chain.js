var Swallowables = {
  1: {
    name: "fly"
  }
};

function VerseNumber() {
  return {
    beginVerse: function beginVerse() {

    },

    midVerse: function midVerse() {

    },

    reasoning: function reasoning() {

    },

    endVerse: function endVerse() {

    }
  }
}

var FoodChainSong = {

  verseFor: function verseFor(animal) {
    var composition = "";

    composition += "I know an old lady who swallowed a " + animal.name + ".\n";
    composition += "I don't know why she swallowed the " + animal.name + ". ";
    composition += "Perhaps she'll die.\n";

    return composition;
  },

  verse: function verse(number) {
    var composition = "";

    for (var i = number; i > 0; i--) {
      var animal = Swallowables[i];

      composition += this.verseFor(animal);
    }

    return composition;
  }

};

module.exports = FoodChainSong;
