// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driver){if driver.toUpperCase() === name.toUpperCase(); return driver;})
}
