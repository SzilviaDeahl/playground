//create a class called Pen
//has an ink level
//and a method called write which takes a string
//and depletes the ink level
//ink level is 1 unit per letter
function Pen(inkLevel) {
  this.inkLevel = inkLevel;
}

Pen.prototype.write = function (string) {
  if (!this.enough(string)) throw "Not enough ink"
  this.inkLevel -= string.length;
  console.log(string);
}

Pen.prototype.enough = function (string) {
  return string.length <= this.inkLevel
}

function FountainPen(inkLevel) {
  Pen.call(this, inkLevel);
}

FountainPen.prototype = Object.create(Pen.prototype);
FountainPen.prototype.constructor = FountainPen;

FountainPen.prototype.refill = function (ink) {
  this.inkLevel += ink;
};

function Marker(inkLevel) {
  Pen.call(this, inkLevel);
}

Marker.prototype = Object.create(Pen.prototype);
Marker.prototype.constructor = Marker;

function Pencil(inkLevel) {
  Pen.call(this, inkLevel);
}

Pencil.prototype = Object.create(Pen.prototype);
Pencil.prototype.constructor = Pencil;

function PointPen(inkLevel) {
  Pen.call(this, inkLevel)
}

PointPen.prototype = Object.create(Pen.prototype);
PointPen.prototype.constructor = PointPen;

function BluePen(inkLevel) {
  Pen.call(this, inkLevel)
}

BluePen.prototype = Object.create(Pen.prototype);
BluePen.prototype.constructor = BluePen;

module.exports = {
  Pen: Pen,
  FountainPen: FountainPen,
  Marker: Marker,
  Pencil: Pencil,
  PointPen: PointPen,
  BluePen: BluePen
};
