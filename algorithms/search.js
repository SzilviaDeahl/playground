// var array = ['Sam', 'Lucas', 'Thomas', 'Katalin', 'Linda'];
// var found_names = [];
//
// function Search (sub) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i].toLowerCase().indexOf(sub) > -1){
//        found_names.push(array[i]);
//     }
//   }
//   return found_names;
// }
//
// console.log(Search("sam"));

var names = [
 'Amanda',
 'Sam',
 'Nick',
 'Nicholas',
 'Roberto',
 'Robbie',
 'Apart',
 'Marcus'
];

function search(criteria, arrayToSearch, fuzzyOrNo, tolerance) {
  var filtered = [];
  arrayToSearch.forEach(function (name) {
    var matchCount = 0;
    var nameLength = name.length;
    if (fuzzyOrNo === true) {
      for (var i = 0; i < criteria.length; i++) {
        if(name.toLowerCase().match(criteria[i].toLowerCase())){
          matchCount++;
          name.slice(name.indexOf(criteria[i]),1);
        }
      }
      if (Math.abs(matchCount - nameLength) <=tolerance && Math.abs(criteria.length - nameLength) <=tolerance) {
        filtered.push(name);
      }
    }
    else if (name.toLowerCase().indexOf(criteria.toLowerCase()) > -1) {
      filtered.push(name);
    }
  });
  console.log(filtered);
  return filtered;
}
search('Marcos', names, true, 1);
search('Marcos', names, true, 3);
