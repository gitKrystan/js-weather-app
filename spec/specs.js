describe('convertKelvinToFahrenheit()', function() {
  it('converts a Kelvin temperature to Fahrenheit', function() {
    expect(convertKelvinToFahrenheit(0)).to.equal(-460);
    expect(convertKelvinToFahrenheit(283.15)).to.equal(50);
  });
});

describe('convertKelvinToCelsius', function() {
  it('converts a Kelvin temperature to Celsius', function() {
    expect(convertKelvinToCelsius(0)).to.equal(-273);
  });
});
