$(document).ready(function(){
  var now = moment();
  $('#time').text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

  var jtBirthday = moment.utc('1981-02-01 00:30'); // 1981-01-31 00:30
  var jtNextAge = moment.duration(now.diff(jtBirthday, 'years') + 1, 'years');
  var jtNextBirthday = jtBirthday.add(jtNextAge);
  var timeLeft = now.diff(jtNextBirthday);
  console.log(jtNextBirthday)

  var interval = 1000;

  setInterval(function(){
    timeLeft = moment.duration(timeLeft - interval, 'milliseconds');
    $('#daysLeft').text(timeLeft.days() + " days " + timeLeft.hours() + " hours " + timeLeft.minutes() + " minutes " + timeLeft.seconds())
  }, interval);
});
