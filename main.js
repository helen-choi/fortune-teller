var form = document.querySelector("form");
var bdayElement = form.querySelector("input");
var zodiac = 'virgo';
var horoscope = document.getElementById("horoscope");
horoscope.textContent = "Virgo"

var input = new Input(bdayElement, form, zodiac);
var fortune = new Fortune(horoscope,zodiac);
var app = new App(input,fortune, zodiac);
app.start();
