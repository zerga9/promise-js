var expect = require("chai").expect;

describe("StudentFilter", function() {
  describe("#getStudents()", function() {
    it("should return a promise");

    var studentFilter = new StudentFilter();

    studentFilter.getStudents(function(err) {
      if (err) done(err);
      else done();
    });
  });
});
