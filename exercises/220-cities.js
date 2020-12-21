// Write a function "coolCities" which takes an array of city Objects like such:
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// and returns a new array containing only those cities whose temperature is
// cooler than 70 degrees.
function coolCities (cities) {
    coolCities = []
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].temperature < 70) {
            coolCities.push(cities[i])
        }
    }
    return coolCities
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "cityNames" which takes an array of city objects like the
// above problem and returns an array of the cities names.

function cityNames (cities) {
    cityNames = []
    for (let i = 0; i < cities.length; i++) {
        cityNames.push(cities[i].name)
    }
    return cityNames
}