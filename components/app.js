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
    var randomNum = Math.floor(Math.random() * 731) + 1;
    $.ajax({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/" + "https://superheroapi.com/api/10206439610825727/" + randomNum,
      success: this.getHeroSuccess,
      error: this.getHeroError
    });
  }
  getHeroSuccess(data) {
    this.showHero(data);
  }
  getHeroError(error) {
    console.error(error);
  }
  showHero(data) {
    console.log(data);
    var divRight = document.createElement('div');
    var heroName = document.createElement('h3');
    var intelligence = document.createElement('p');
    var strength = document.createElement('p');
    var speed = document.createElement('p');
    var durability = document.createElement('p');
    var power = document.createElement('p');
    var combat = document.createElement('p');

    divRight.classList.add('fortune-details', 'right');
    heroName.textContent = 'To get you through the day, be a ' + data.name + '!';
    intelligence.textContent = 'Intelligence: ' + data.powerstats.intelligence;
    strength.textContent = 'Strength: ' + data.powerstats.strength;
    speed.textContent = 'Speed: ' + data.powerstats.speed;
    durability.textContent = 'Durability: ' + data.powerstats.durability;
    power.textContent = 'Power: ' + data.powerstats.power;
    combat.textContent = 'Combat: ' + data.powerstats.combat;


    divRight.appendChild(heroName);
    divRight.appendChild(intelligence);
    divRight.append(strength);
    divRight.append(speed);
    divRight.append(durability);
    divRight.append(power);
    divRight.append(combat);

    this.contentElement.appendChild(divRight);
  }
  showFortune(data) {
    var header = document.createElement('header');
    var greeting = document.createElement('h2');
    var fortuneElement = document.createElement('p');
    var divLeft = document.createElement('div');
    var luckyNumber = document.createElement('p');
    var luckyTime = document.createElement('p');
    var color = document.createElement('p');
    var compatibility = document.createElement('p');

    greeting.textContent = 'Hello ' + this.zodiac + '!';
    fortuneElement.textContent = data.description;
    divLeft.classList.add('fortune-details', 'right');
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
  }
}
