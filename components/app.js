class App {
  constructor(input,contentElement) {
    this.input = input;
    this.zodiac = null;
    this.contentElement = contentElement;
    this.handleFortuneSuccess = this.handleFortuneSuccess.bind(this);
    this.getHeroSuccess = this.getHeroSuccess.bind(this);
    this.getFortune = this.getFortune.bind(this);
  }
  start() {
    this.getHero();
    this.input.onSubmit(this.getFortune)
  }
  getFortune(zodiac) {
    $.ajax({
      type: 'POST',
      url: 'https://aztro.sameerkumar.website?sign=' + zodiac +'&day=today',
      success: this.handleFortuneSuccess
    });
    this.zodiac = zodiac;
  }
  handleFortuneSuccess(data) {
    this.showFortune(data);
  }
  getHero() {
    $.ajax({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/" + "https://superheroapi.com/api/10206439610825727/307",
      success: this.getHeroSuccess
    });
  }
  getHeroSuccess(data) {
    console.log(data)
  }
  showFortune(data) {
    console.log(data);
    var header = document.createElement('header');
    var greeting = document.createElement('h2');
    var fortuneElement = document.createElement('p');
    var divLeft = document.createElement('div');
    var divRight = document.createElement('div');
    var luckyNumber = document.createElement('p');
    var luckyTime = document.createElement('p');
    var color = document.createElement('p');
    var compatibility = document.createElement('p');

    greeting.textContent = 'Hello ' + this.zodiac + '!';
    fortuneElement.textContent = data.description;
    divLeft.classList.add('fortune-details', 'right');
    divRight.classList.add('fortune-details', 'right');
    luckyNumber.textContent = 'Lucky Number: ' + data.lucky_number;
    luckyTime.textContent = 'Lucky Time: ' + data.lucky_time;
    color.textContent = 'Color: ' + data.color;
    compatibility.textContent = 'Compatibility: ' + data.compatibility;

    header.appendChild(greeting);
    header.appendChild(fortuneElement);
    divLeft.appendChild(luckyNumber);
    divLeft.appendChild(luckyTime);
    divLeft.appendChild(color);
    divLeft.appendChild(compatibility);

    this.contentElement.appendChild(header);
    this.contentElement.appendChild(divLeft);
    this.contentElement.appendChild(divRight);
  }
}
