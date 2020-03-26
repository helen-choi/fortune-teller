class App {
  constructor(input,contentElement) {
    this.input = input;
    this.zodiac = null;
    this.contentElement = contentElement;
    this.handleFortuneSuccess = this.handleFortuneSuccess.bind(this);
    this.handleFortuneError = this.handleFortuneError.bind(this);
    this.getHeroSuccess = this.getHeroSuccess.bind(this);
    this.getHeroError = this.getHeroError.bind(this);
    this.getFortune = this.getFortune.bind(this);
    this.getHero = this.getHero.bind(this);
    this.showHero = this.showHero.bind(this);
  }
  start() {
    this.input.onSubmit(this.getFortune,this.getHero);
  }
  getFortune(zodiac) {
    $.ajax({
      type: 'POST',
      url: 'https://aztro.sameerkumar.website?sign=' + zodiac +'&day=today',
      success: this.handleFortuneSuccess,
      error: this.handleFortuneError
    });
    this.zodiac = zodiac;
  }
  handleFortuneSuccess(data) {
    this.showFortune(data);
  }
  handleFortuneError(error) {
    console.error(error);
  }
  getHero() {
    var randomNum = Math.floor(Math.random() * 802) +1;
    $.ajax({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/" + randomNum + "/",
      success: this.getHeroSuccess,
      error: this.getHeroError
    })
  }
  getHeroSuccess(data) {
    this.showHero(data);
    console.log(data);
  }
  getHeroError(error) {
    console.error(error);
  }
  showFortune(data) {
    var header = document.createElement('header');
    var zodiacImage = document.createElement('img');
    var greeting = document.createElement('h2');
    var fortuneElement = document.createElement('p');
    var divLeft = document.createElement('div');
    var luckyNumber = document.createElement('p');
    var luckyTime = document.createElement('p');
    var color = document.createElement('p');
    var compatibility = document.createElement('p');

    zodiacImage.src = './images/' + this.zodiac + '.png';
    greeting.textContent = 'Hello ' + this.zodiac + '!';
    fortuneElement.textContent = data.description;
    divLeft.classList.add('fortune-details', 'left');
    luckyNumber.textContent = 'Lucky Number: ' + data.lucky_number;
    luckyTime.textContent = 'Lucky Time: ' + data.lucky_time;
    color.textContent = 'Color: ' + data.color;
    compatibility.textContent = 'Compatibility: ' + data.compatibility;

    header.appendChild(zodiacImage);
    header.appendChild(greeting);
    header.appendChild(fortuneElement);
    divLeft.appendChild(luckyNumber);
    divLeft.appendChild(luckyTime);
    divLeft.appendChild(color);
    divLeft.appendChild(compatibility);

    this.contentElement.appendChild(header);
    this.contentElement.appendChild(divLeft);
  }
  showHero(data) {
    console.log(data);
    var divRight = document.createElement('div');
    var heroName = document.createElement('h3');
    var imgDiv = document.createElement('div');
    var heroImg = document.createElement('img');
    var type = document.createElement('p');
    var ability = document.createElement('p');
    var typeText = '';
    var abilityText = '';

    divRight.classList.add('fortune-details', 'right');
    heroName.textContent = 'To get you through the day, be like ' + data.name + '!';
    imgDiv.classList.add('hero-image');
    heroImg.src = data.sprites.front_default;
    for(var i = 0; i < data.types.length; i++) {
      typeText += data.types[i].type.name + ', ';
    }
    type.textContent = 'Type: ' + typeText;
    for(var j = 0; j < data.abilities.length; j++) {
      abilityText += data.abilities[j].ability.name + ', ';
    }
    ability.textContent = 'Ability: ' + abilityText.substring(0, abilityText.length - 2);

    imgDiv.appendChild(heroImg);
    divRight.appendChild(heroName);
    divRight.appendChild(type);
    divRight.appendChild(ability);
    divRight.appendChild(imgDiv);

    setTimeout(function() {
      this.contentElement.appendChild(divRight);
    }, 2000);
  }
}
