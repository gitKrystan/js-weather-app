var scripts = require('./../js/scripts.js');
var apiKey = "cf92d9fbcc2eebdcaab0bf6fedff8e48";

$(document).ready(function(){
  var responseFromOWM;
  var $showWeather = $('#showWeather');
  var chosenTemperatureDisplay = "fahrenheit";
  $('input[type=radio][name=temperatureDisplayOptions][value=fahrenheit]')
     .prop( "checked", true );

  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      responseFromOWM = response;
      if(responseFromOWM.cod !== 200) {
        $showWeather.text(responseFromOWM.message);
      } else {
        $showWeather.show();
        $('#chosenCity').text(city);
        $('#humidity').text(responseFromOWM.main.humidity);
        changeTemperatureDisplay();
      }
    });
  });

  $('input[type=radio][name=temperatureDisplayOptions]').change(function() {
    chosenTemperatureDisplay = $(this).val();
    changeTemperatureDisplay();
  });

  function changeTemperatureDisplay() {
    var temperatureType = "";
    var temperatureInteger;
    if (responseFromOWM) {
      if(chosenTemperatureDisplay === "celsius") {
        temperatureInteger = convertKelvinToCelsius(responseFromOWM.main.temp);
        temperatureType = "C";
      } else if (chosenTemperatureDisplay === "kelvin") {
        temperatureInteger = responseFromOWM.main.temp;
        temperatureType = "K";
      } else if (chosenTemperatureDisplay === "fahrenheit") {
        temperatureInteger = convertKelvinToFahrenheit(responseFromOWM.main.temp);
        temperatureType = "F";
      }
    }
    $('#temperatureDisplay').text(temperatureInteger);
    $('#temperatureType').text(temperatureType);
  }
});
