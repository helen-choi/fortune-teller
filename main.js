var form = document.querySelector("form");
var bdayElement = form.querySelector("input");
// var zodiac = 'virgo';
var contentElement = document.getElementById("fortune");

var input = new Input(bdayElement, form);
var app = new App(input,contentElement);
app.start();
