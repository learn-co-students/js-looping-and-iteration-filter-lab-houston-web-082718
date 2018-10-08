// Code your solution in this file
function findMatching(array, name) {
    return array.filter(function(n) {return n.toUpperCase() === name.toUpperCase()})
}

function fuzzyMatch(array, str) {
    return array.filter(function(string) {return string.startsWith(str)})
}

function matchName(array, n) {
    return array.filter(function(driver) {return driver.name.toUpperCase() === n.toUpperCase()})
}