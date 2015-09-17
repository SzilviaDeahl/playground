function isOverlapped (timespanA, timespanB) {
  if(timespanA.end > timespanB.start && timespanA.end < timespanB.end){
    return 'true';
  } else if (timespanA.start > timespanB.start && timespanA.end < timespanB.end){
    return 'true';
  } else if (timespanA.start < timespanB.end && timespanA.end > timespanB.end) {
    return 'true';
  } else if (timespanA.start < timespanB.start && timespanA.end > timespanB.end){
    return 'true';
  } else if (timespanA.start.getTime() === timespanB.start.getTime() && timespanA.end.getTime() === timespanB.end.getTime()){
    return 'true';
  } else {
    return 'false';
  }
}


var timespans = {
	christmas: {
		start: new Date("December 25, 2015"),
		end: new Date("December 26, 2015")
	},
	halloween: {
		start: new Date("October 31, 2015"),
		end: new Date("November 1, 2015")
	},
	thisMillenium: {
		start: new Date("January 1, 2000"),
		end: new Date("January 1, 3000")
	},
	event1: {
		start: new Date("March 20, 2015"),
		end: new Date("March 21, 2015")
	},
	event2: {
		start: new Date("March 21, 2015"),
		end: new Date("March 22, 2015")
	},
	event3: {
		start: new Date("March 19, 2015"),
		end: new Date("March 20, 2015")
	},
	event4: {
		start: new Date("March 19, 2015"),
		end: new Date("March 22, 2015")
	},

  event5: {
    start: new Date("March 20, 2015"),
		end: new Date("March 21, 2015")
  }
};

// var christmasTimespan = {
//     start: moment("2015-12-25"),
//     end: moment("2015-12-26")
// };

console.log(isOverlapped(timespans.christmas, timespans.thisMillenium)); //true

console.log(isOverlapped(timespans.christmas, timespans.halloween)); //false

console.log(isOverlapped(timespans.event1, timespans.event1)); //true

console.log(isOverlapped(timespans.event1, timespans.event2)); //false

console.log(isOverlapped(timespans.event1, timespans.event3)); //false

console.log(isOverlapped(timespans.event1, timespans.event4)); //true

console.log(isOverlapped(timespans.event4, timespans.event1)); //true

console.log(isOverlapped(timespans.event1, timespans.event5));
