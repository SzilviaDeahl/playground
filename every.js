//it returns true if every number is > 10
//it returns false if not every number is >10
// forEach _must_mutate == it must do something, because putting return inside,
// does nothing, will return undifined, because it doesn't capture results
//forEach is always going to be slower than for loop

var obj = {
  numbers: [16, 17],
  big: function () {
    var result = true;
    this.numbers.forEach(function (number) {
      if (number <= 10){
        result = false;
      }
    });
    return result;
  }
}

console.log(obj.big());
obj.numbers = [9, 16, 17];
console.log(obj.big());
