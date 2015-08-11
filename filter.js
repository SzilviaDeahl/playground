var array = [17, 2, 3, 16, 11, 10]

//write function with a for loop
//that filters out numbers > 10

var greaterThan10 = function (array) {
  var newA =[]
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 10){
      newA.push(array[i])
    }
  }
  return newA;
}

var newA = greaterThan10(array);
console.log(newA);

//write a forEach loop to do the same

var obj = {
  array: [17, 2, 3, 16, 11, 10], //state /properties
  min: 10,
  biggerThan10: function () { //behavior /functions
    var newArray = [];
    //or fix it like var that = this, and clear .bind
    this.array.forEach(function (i) {
      if (i > this.min){
        newArray.push(i)
      }
    }.bind(this));
    return newArray;
  }
}
console.log(obj.biggerThan10());
