// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

// function findMatching(drivers, name) {
//   let new_array = [];
//   for (const element of drivers) {
//     if (element === name) {
//      new_array.push(name);
//     }
//   }
//   return new_array;
// }

function findMatching(drivers, name) {
  return drivers.filter(function (element) { return element.toUpperCase() === name.toUpperCase(); } );
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (element) { return element.slice(0,2) === name.slice(0,2); });
}

function matchName(drivers, name) {
  return drivers.filter(function (element) { return element.name === name; });
}