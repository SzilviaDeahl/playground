

var Node = function (x, y, name) {
  this.x = x;
  this.y = y;
  this.name = name;
}

var flag = new Node(10, 10, 'John');
var player = new Node(0,0, 'Mike');

// var distance = Math.sqrt((Math.pow((player.x - flag.x), 2) + (Math.pow((player.y - flag.y), 2))));

function distance(player, flag) {
  var dist = Math.sqrt((Math.pow((player.x - flag.x), 2) + (Math.pow((player.y - flag.y), 2))));
  console.log(dist);
  return dist;
}
distance(player, flag);
// console.log(flag);
// console.log(player.x);
