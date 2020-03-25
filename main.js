var form = document.querySelector("form");
var bdayElement = form.querySelector("input");
// var zodiac = 'virgo';
var horoscope = document.getElementById("horoscope");

var input = new Input(bdayElement, form);
var app = new App(input);
app.start();
