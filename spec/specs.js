// describe("Movie", function() {
//   "use strict";
//   it("has a name, release type, and initially empty array of showtimes", function() {
//     var testMovie = new Movie("Inception", false)
//     expect(testMovie.name).to.equal("Inception");
//     expect(testMovie.firstRelease).to.equal(false);
//     expect(testMovie.showtimes).to.eql([]);
//   });
//
//   describe("addShowtime", function() {
//     it("adds another showtime to a movie", function() {
//       var testMovie = new Movie("Inception", false)
//       testMovie.addShowtime("4:00 PM");
//       expect(testMovie.showtimes).to.eql(["4:00 PM"]);
//     });
//   });
//
// });

describe("Showtime", function() {
  "use strict";
  it("has hours, minutes", function() {
    var testShowTime = new Showtime(4, 20)
    expect(testShowTime.hours).to.equal(4);
    expect(testShowTime.minutes).to.equal(20);
  });

  describe("isPM", function() {
    "use strict";
    it("time is in the PM", function() {
      var testShowTime = new Showtime(20, 20)
      expect(testShowTime.isPM()).to.equal(true);
    });
  });

  describe("milFormat", function() {
    "use strict";
    it("time formatted in 24 hour notation", function() {
      var testShowTime = new Showtime(20, 20)
      expect(testShowTime.milFormat()).to.equal("20:20");
    });
  });

  describe("civFormat", function() {
    "use strict";
    it("time formatted in 24 hour notation", function() {
      var testShowTime = new Showtime(20, 20)
      expect(testShowTime.civFormat()).to.equal("8:20 PM");
    });
  });

});

describe("Ticket", function() {
  "use strict";
  it("has a movie name, release type, show time, senior discount", function() {
    var testTime = new Showtime(7, 45);
    var testTicket = new Ticket("Godzilla", false, testTime, 21);
    expect(testTicket.movieName).to.equal("Godzilla");
    expect(testTicket.firstRelease).to.equal(false);
    expect(testTicket.matinee).to.equal(false);
    expect(testTicket.senior).to.equal(false);
  });

  describe("#cost", function() {
    "use strict";
    it("calculates the ticket cost factoring in release type of a movie", function() {
      var testTime = new Showtime(7, 45);
      var testTicket = new Ticket("Godzilla", true, testTime, 21);
      expect(testTicket.cost()).to.equal(10);
    });

    it("factors in the showtime", function() {
      var testTime = new Showtime(3, 45);
      var testTicket = new Ticket("Godzilla", false, testTime, 21);
      expect(testTicket.cost()).to.equal(5);
    });

    it("factors in the age of the moviegoer", function() {
      var testTime = new Showtime(3, 45);
      var testTicket = new Ticket("Godzilla", false, testTime, 66);
      expect(testTicket.cost()).to.equal(3);
    });
  });
});
