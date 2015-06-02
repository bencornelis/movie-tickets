//raw js
function Movie(name, isFirstRelease) {
  this.name = name;
  this.firstRelease = isFirstRelease;
  this.showtimes = [];
};


Movie.prototype.addShowtime = function(showtime) {
  this.showtimes.push(showtime);
};


function Showtime(hrs, mins) {
  this.hours = hrs;
  this.minutes = mins;
};

Showtime.prototype.isPM = function() {
  return this.hours >= 12;
};

Showtime.prototype.civFormat = function() {
  var ampm = "AM";
  if (this.isPM()) { ampm = "PM"};
  return this.hours % 12 + ":" + this.minutes + " " + ampm;
};

Showtime.prototype.milFormat = function() {
  return this.hours + ":" + this.minutes;
};

function Ticket(movieName, isFirstRelease, showtime, patronAge) {
  this.matineeDiscount = 1;
  this.seniorDiscount = 2;
  this.movieName = movieName;
  this.firstRelease = isFirstRelease;
  this.matinee = showtime.hours < 4;
  this.senior = patronAge >= 65;
};

Ticket.prototype.cost = function() {
  var ticketCost;
  if (this.firstRelease) {
    ticketCost = 10;
  } else {
    ticketCost = 6;
  }

  if (this.matinee) {
    ticketCost -= this.matineeDiscount;
  }

  if (this.senior) {
    ticketCost -= this.seniorDiscount;
  }
  return ticketCost;
};

var foo = function(bar) {
  "use strict";
  return false;
};

var randomTime = function() {
  "user strict";
  var hour = Math.floor((Math.random() * 24) + 1);
  var min = Math.floor((Math.random() * 5) + 1) * 10;
  return new Showtime(hour, min);
}

var populateMovieTimes = function() {
  $("select#showtimes").empty();
  for (var i = 0; i < 3; i++) {
    var someTime = randomTime();
    var optionHTML = "<option value='" + someTime.milFormat() + "'>" + someTime.civFormat() + "</option>";
    $("select#showtimes").append(optionHTML);
  }
}

//jQuery
$( document ).ready(function() {
  "use strict";
    console.log( "jQuery Ready" );

    populateMovieTimes();

    $("select#movie-title").change(function() {
      populateMovieTimes();
    });
});
