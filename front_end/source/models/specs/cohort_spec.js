var Cohort = require('../cohort');
var assert = require('assert');

describe ('Cohort', function () {
  var cohort1;
  var cohort2;
  var teachers;
});

beforeEach(function () {
  teachers = ["Keith", "Sandy", "Sian", "Upul"];
  cohort1 = new Cohort("E17", new Date(2017, 09, 30), teachers);
  cohort2 = new Cohort("E18", new Date(2017,10,20));
});

it('should count the week numbers since starting', function() {
  cohort1.setNoOfWeeks();
  cohort2.setNoOfWeeks();
  assert.equal(cohort1.week, 14)
  assert.equal(cohort2.week, 11)
});
