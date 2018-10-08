// Code your solution in this file
function findMatching(drivers, name) {
    found_drivers = drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase();
    });
    return found_drivers;
};

function fuzzyMatch (drivers, beginning) {
    found_drivers = drivers.filter(driver => {
        return driver.slice(0, beginning.length) === beginning;
    });

    return found_drivers;
};

function matchName (drivers, name) {
    return drivers.filter(driver => {
        return driver.name === name;
    });
};