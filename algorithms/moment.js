var moment = require('moment');

function isOverlapped (timespanA, timespanB) {
  if(timespanA.end > timespanB.start && timespanA.end < timespanB.end){
    return 'true';
  } else if ((timespanA.start).isAfter(timespanB.start) && (timespanA.end).isBefore(timespanB.end)){
    return 'true';
  } else if ((timespanA.start).isBefore(timespanB.end) && (timespanA.end).isAfter(timespanB.end)) {
    return 'true';
  } else if ((timespanA.start).isBefore(timespanB.start) && (timespanA.end).isAfter(timespanB.end)){
    return 'true';
  } else if ((timespanA.start).isSame(timespanB.start) && (timespanA.end).isSame(timespanB.end)){
    return 'true';
  } else {
    return 'false';
  }
}


// var christmasTimespan = {
//     start: moment("2015-12-25"),
//     end: moment("2015-12-26")
// };

var timespans = {
	christmas: {
		start: moment("2015-12-25"),
		end: moment("2015-12-26")
	},
	halloween: {
		start: moment("2015-10-31"),
		end: moment("2015-11-01")
	},
	thisMillenium: {
		start: moment("2000-01-01"),
		end: moment("3000-01-01")
	},
	event1: {
		start: moment("2015-03-20"),
		end: moment("2015-03-21")
	},
	event2: {
		start: moment("2015-03-21"),
		end: moment("2015-03-22")
	},
	event3: {
		start: moment("2015-03-19"),
		end: moment("2015-03-20")
	},
	event4: {
		start: moment("2015-03-19"),
		end: moment("2015-03-22")
	},

  event5: {
    start: moment("2015-03-20"),
		end: moment("2015-03-21")
  }
};

console.log(isOverlapped(timespans.christmas, timespans.thisMillenium)); //true

console.log(isOverlapped(timespans.christmas, timespans.halloween)); //false

console.log(isOverlapped(timespans.event1, timespans.event1)); //true

console.log(isOverlapped(timespans.event1, timespans.event2)); //false

console.log(isOverlapped(timespans.event1, timespans.event3)); //false

console.log(isOverlapped(timespans.event1, timespans.event4)); //true

console.log(isOverlapped(timespans.event4, timespans.event1)); //true

console.log(isOverlapped(timespans.event1, timespans.event5));
