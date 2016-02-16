var apiKey = "cf92d9fbcc2eebdcaab0bf6fedff8e48";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      if(response.cod !== 200) {
        $('#showWeather').text(response.message);
      } else {
        $('#showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      }
    });
  });
});
