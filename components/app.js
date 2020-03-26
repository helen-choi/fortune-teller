class App {
  constructor(input,contentElement) {
    this.input = input;
    this.zodiac = null;
    this.fortune = null;
    this.contentElement = contentElement;
    this.header = null;
    this.divRight = null;
    this.main = null;
    this.handleFortuneSuccess = this.handleFortuneSuccess.bind(this);
    this.handleFortuneError = this.handleFortuneError.bind(this);
    this.getHeroSuccess = this.getHeroSuccess.bind(this);
    this.getHeroError = this.getHeroError.bind(this);
    this.getFortune = this.getFortune.bind(this);
    this.getHero = this.getHero.bind(this);
    this.showHero = this.showHero.bind(this);
    this.smoothScroll = this.smoothScroll.bind(this);
  }
  start() {
    this.fortune = document.querySelector('.fortune');
    this.fortune.classList.add('hidden');
    this.input.onSubmit(this.getFortune,this.getHero,this.smoothScroll);
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
    var randomNum = Math.floor(Math.random() * 151) + 1;
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
    this.header = document.createElement('header');
    this.main = document.createElement('main');
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

    this.header.appendChild(zodiacImage);
    this.header.appendChild(greeting);
    this.header.appendChild(fortuneElement);
    divLeft.appendChild(luckyNumber);
    divLeft.appendChild(luckyTime);
    divLeft.appendChild(color);
    divLeft.appendChild(compatibility);

    this.contentElement.appendChild(this.header);
    this.main.append(divLeft, this.divRight);
    this.contentElement.appendChild(this.main);
  }
  showHero(data) {
    this.divRight = document.createElement('div');
    this.main = document.createElement('main');
    var heroName = document.createElement('h3');
    var imgDiv = document.createElement('div');
    var heroImg = document.createElement('img');
    var type = document.createElement('p');
    var ability = document.createElement('p');
    var typeText = '';
    var abilityText = '';

    this.divRight.classList.add('fortune-details', 'right');
    heroName.textContent = 'Lucky Pokemon: ' + data.name + '';
    imgDiv.classList.add('hero-image');
    heroImg.src = data.sprites.front_default;
    for(var i = 0; i < data.types.length; i++) {
      typeText += data.types[i].type.name + ', ';
    }
    type.textContent = 'Type: ' + typeText.substring(0, typeText.length - 2);
    for(var j = 0; j < data.abilities.length; j++) {
      abilityText += data.abilities[j].ability.name + ', ';
    }
    ability.textContent = 'Ability: ' + abilityText.substring(0, abilityText.length - 2);

    imgDiv.appendChild(heroImg);
    this.divRight.appendChild(heroName);
    this.divRight.appendChild(type);
    this.divRight.appendChild(ability);
    this.divRight.appendChild(imgDiv);
  }
  smoothScroll(target, duration) {
    this.fortune.classList.remove('hidden');
    var targetEl = document.getElementById(target);
    var targetPosition = targetEl.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if(startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0,run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t,b,c,d) {
      t /= d / 2;
      if(t < 1) return  c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
  }
  resetFortune() {

  }
}
