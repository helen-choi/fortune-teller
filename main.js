var form = document.querySelector("form");
var bdayElement = form.querySelector("input");
var zodiac = 'virgo';

var input = new Input(bdayElement, form, zodiac)
var app = new App(input,zodiac);
app.start();
