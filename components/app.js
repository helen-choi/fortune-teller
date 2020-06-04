class App {
  constructor(input,contentElement) {
    this.input = input;
    this.zodiac = null;
    this.divLeft = document.createElement('div');
    this.divRight = document.createElement('div');
    this.header = document.createElement('header');
    this.main = document.createElement('main');
    this.contentElement = contentElement;
    this.resetBtn = document.getElementById('top');
    this.loading = document.getElementById('loading');

    this.handleFortuneSuccess = this.handleFortuneSuccess.bind(this);
    this.handleFortuneError = this.handleFortuneError.bind(this);
    this.getPokemonSuccess = this.getPokemonSuccess.bind(this);
    this.getPokemonError = this.getPokemonError.bind(this);
    this.getFortune = this.getFortune.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
    this.showPokemon = this.showPokemon.bind(this);
    this.smoothScroll = this.smoothScroll.bind(this);
    this.resetFortune = this.resetFortune.bind(this);
    this.showLoading = this.showLoading.bind(this);
  }
  start() {
    this.fortune = document.querySelector('.fortune');
    this.fortune.classList.add('hidden');
    this.input.onSubmit(this.getFortune,this.getPokemon);
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
  getPokemon() {
    var randomNum = Math.floor(Math.random() * 151) + 1;
    $.ajax({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/" + randomNum + "/",
      success: this.getPokemonSuccess,
      error: this.getPokemonError
    })
  }

  getPokemonSuccess(data) {
    if(!data) {
      this.getPokemon();
    }else {
      this.showPokemon(data);
    }
  }
  getPokemonError(error) {
    console.error(error);
  }
  showLoading() {
    this.loading.classList.remove('hidden');
    setTimeout(() => {
      this.loading.classList.add('hidden');
      this.smoothScroll('fortune-container', 1500);
    },2000)
  }
  showFortune(data) {
    var zodiacImage = document.createElement('img');
    var greeting = document.createElement('h2');
    var fortuneElement = document.createElement('p');
    var luckyNumber = document.createElement('p');
    var luckyTime = document.createElement('p');
    var color = document.createElement('p');
    var compatibility = document.createElement('p');

    zodiacImage.src = './images/' + this.zodiac + '.png';
    var zodiacCapitalize = this.zodiac.charAt(0).toUpperCase() + this.zodiac.slice(1);
    greeting.textContent = 'Hello ' + zodiacCapitalize + '!';
    fortuneElement.textContent = data.description;
    this.divLeft.classList.add('fortune-details', 'left');
    luckyNumber.textContent = 'Lucky Number: ' + data.lucky_number;
    luckyTime.textContent = 'Lucky Time: ' + data.lucky_time;
    color.textContent = 'Color: ' + data.color;
    compatibility.textContent = 'Compatibility: ' + data.compatibility;

    this.header.innerHTML = "";
    this.header.appendChild(zodiacImage);
    this.header.appendChild(greeting);
    this.header.appendChild(fortuneElement);

    this.divLeft.innerHTML="";
    this.divLeft.appendChild(luckyNumber);
    this.divLeft.appendChild(luckyTime);
    this.divLeft.appendChild(color);
    this.divLeft.appendChild(compatibility);

    this.contentElement.appendChild(this.header);
    this.main.append(this.divLeft);
    this.contentElement.appendChild(this.main);
  }
  showPokemon(data) {
    var pokemonName = document.createElement('h3');
    var imgDiv = document.createElement('div');
    var pokemonImg = document.createElement('img');
    var type = document.createElement('p');
    var ability = document.createElement('p');
    var typeText = '';
    var abilityText = '';
    var pokemonCapitalize = data.name.charAt(0).toUpperCase() + data.name.slice(1);

    this.divRight.classList.add('fortune-details', 'right');
    pokemonName.textContent = 'Lucky Pokemon: ' + pokemonCapitalize + '';
    imgDiv.classList.add('pokemon-image');
    pokemonImg.src = data.sprites.front_default;
    for(var i = 0; i < data.types.length; i++) {
      typeText += data.types[i].type.name + ', ';
    }
    type.textContent = 'Type: ' + typeText.substring(0, typeText.length - 2);
    for(var j = 0; j < data.abilities.length; j++) {
      abilityText += data.abilities[j].ability.name + ', ';
    }
    ability.textContent = 'Ability: ' + abilityText.substring(0, abilityText.length - 2);

    imgDiv.appendChild(pokemonImg);
    this.divRight.innerHTML = "";
    this.divRight.appendChild(pokemonName);
    this.divRight.appendChild(type);
    this.divRight.appendChild(ability);
    this.divRight.appendChild(imgDiv);

    this.main.append(this.divRight);
    this.resetBtn.addEventListener('click', this.resetFortune);
    this.showLoading();
  }
  smoothScroll(target, duration) {
    this.fortune.classList.remove('hidden');
    var targetEl = document.getElementById(target);
    var targetPosition = targetEl.getBoundingClientRect().top;
    var startPosition = window.scrollY;
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
    this.smoothScroll('form', 1500);
  }
}
