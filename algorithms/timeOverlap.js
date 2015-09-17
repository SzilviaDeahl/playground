function isOverlapped (timespanA, timespanB) {
  if(timespanA.end > timespanB.start && timespanA.end < timespanB.end){
    console.log('true');
  } else if (timespanA.start > timespanB.start && timespanA.end < timespanB.end || timespanA.end >timespanB.end){
    console.log('true');
  } else {
    console.log('false');
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
	}
};


isOverlapped(timespans.halloween, timespans.christmas);
