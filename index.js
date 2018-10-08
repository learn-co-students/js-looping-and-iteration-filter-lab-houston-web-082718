function findMatching(array, name) {
  return array.filter(function (n) { return name.toUpperCase() === n.toUpperCase()})
}

function fuzzyMatch(array, str) {
  return array.filter(function (arrValue) { return arrValue.startsWith(str) })
} 

function matchName(array, searchName) {
  return array.filter(function (driver) { return driver.name === searchName })
}