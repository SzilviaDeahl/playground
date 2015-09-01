var array = ['Sam', 'Lucas', 'Thomas', 'Katalin', 'Linda'];
var found_names = [];

function Search (sub) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].toLowerCase().indexOf(sub) > -1){
       found_names.push(array[i]);
    }
  }
  return found_names;
}

console.log(Search("sam"));
