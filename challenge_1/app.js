// code goes here
console.log('html rendered');
// add click handlers
// document.addEventListener();
var table = document.getElementById('gameTable');
console.log(table);
var cells = document.getElementsByTagName('td');
console.log(cells);
for (var cell of cells) {
  console.log('inside');
  var thing = cell.getAttribute('id')
  console.log(thing);
};
  // change value when clicked to 'X'
// add col checkers
// add row checkers
// add diag checkers