function findMatching(drivers, name) {
  const matching = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
  // console.log(matching)
  return matching
}

function fuzzyMatch(drivers, beginsWith) {
  const firstMatch = drivers.filter(driver => driver.startsWith(beginsWith))
  return firstMatch
}

function matchName(drivers, name) {
  const matching = drivers.filter(driver => driver.name === name)
  // console.log(matching)
  return matching
}
