var Pen = require('./writing-utensils').Pen;
var FountainPen = require('./writing-utensils').FountainPen;
var Marker = require('./writing-utensils').Marker;
var Pencil = require('./writing-utensils').Pencil;
var PointPen = require('./writing-utensils').PointPen;
var BluePen = require('./writing-utensils').BluePen;


var bic = new Pen(10);
// console.log(bic);
bic.write('hello')
bic.write('bye')

var fountainPen = new FountainPen(15);
console.log(fountainPen.inkLevel);
fountainPen.refill((10));
console.log(fountainPen.inkLevel);

var marker = new Marker(20);
// console.log(marker);
// console.log(Marker.prototype);

var pencil = new Pencil(25);
// console.log(pencil);

var pointPen = new PointPen(30)
console.log(pointPen.inkLevel);

var bluePen = new BluePen(35);
console.log(bluePen.inkLevel);
