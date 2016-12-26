module.exports = function Leap(year) {
  this.year = year;

  this.isLeap = function isLeap() {
    year = this.year;

    if (year % 4   == 0 &&
        year % 100 != 0) { return true; }

    if (year % 4   == 0 &&
        year % 100 == 0 &&
        year % 400 == 0 ) { return true; }

    return false;
  }
}
