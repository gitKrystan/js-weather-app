var apiKey = "cf92d9fbcc2eebdcaab0bf6fedff8e48";

$(document).ready(function(){
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    $('#showWeather').text("The city you have chosen is " + city + ".");
  });
});
