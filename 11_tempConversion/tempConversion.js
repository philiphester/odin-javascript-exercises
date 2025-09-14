// My solutions
const convertToCelsius = function(fahrenheit) {
  const converted = (fahrenheit - 32) * (5 / 9);
  const celsiusRounded = Math.round(converted * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(celsius) {
  const converted = celsius * (9 / 5) + 32;
  const fahrenheitRounded = Math.round(converted * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
