convertKelvinToFahrenheit = function(degreesKelvin) {
  var rawValue = degreesKelvin * (9/5) -459.67;
  return Math.round(rawValue);
};

convertKelvinToCelsius = function(degreesKelvin) {
  var rawValue = degreesKelvin - 273.15;
  return Math.round(rawValue);
};

module.exports = {
  convertKelvinToFahrenheit: convertKelvinToFahrenheit,
  convertKelvinToCelsius: convertKelvinToCelsius
};
