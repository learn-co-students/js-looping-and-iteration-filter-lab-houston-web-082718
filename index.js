// Code your solution in this file
function findMatching(list, name) {
    return list.filter(function (driverName) {
        return driverName.toUpperCase() === name.toUpperCase();
    }); 
}

function fuzzyMatch(list, name) {
    return list.filter(function (driverName) {
        return driverName[0] === name[0];
    });
}

function matchName(list, name) {
    return list.filter(function (driver) {
        return driver.name.toUpperCase() === name.toUpperCase()
    });
}
