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
