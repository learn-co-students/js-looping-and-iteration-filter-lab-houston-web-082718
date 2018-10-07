// Code your solution in this file
// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });

function findMatching(arry, name) {
    return arry.filter(function(driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(arry, letters) {
    return arry.filter(function(name) {
        return (name[0].toLowerCase() === letters[0].toLowerCase()) && (name[1].toLowerCase() === letters[1].toLowerCase())
    })
}

function matchName(arry, name) {
    return arry.filter(function(driverName) {
        return driverName.name.toLowerCase() === name.toLowerCase();
    });
}



