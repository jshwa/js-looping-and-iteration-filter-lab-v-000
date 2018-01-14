// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driver)  {return driver.toUpperCase() === name.toUpperCase()})
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.slice(string.length) === string
  })
}