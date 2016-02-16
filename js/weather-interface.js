var scripts = require('./../js/scripts.js');
var apiKey = "cf92d9fbcc2eebdcaab0bf6fedff8e48";

$(document).ready(function(){
  var $showWeather = $('#showWeather');

  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      if(response.cod !== 200) {
        $showWeather.text(response.message);
      } else {
        $showWeather.text("The humidity in " + city + " is " + response.main.humidity + "%");
        $showWeather.append("<p>The temperature is " + convertKelvinToCelsius(response.main.temp) + '&deg;C</p>');
      }
    });
  });
});
