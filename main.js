var form = document.querySelector("form");
var bdayElement = form.querySelector("input");
var contentElement = document.getElementById("fortune-container");

var input = new Input(bdayElement, form);
var app = new App(input,contentElement);
app.start();
