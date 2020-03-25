var bdayElement = document.getElementById("bday");
var form = document.querySelector("form");
form.addEventListener('submit', function(event) {
  var bday = bdayElement.value;
  event.preventDefault();
  console.log(bday.split('-'));
})
var zodiac = 'virgo';

var app = new App(zodiac);
app.start();
