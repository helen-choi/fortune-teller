class App {
  constructor(input) {
    this.input = input;
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
    console.log(data.description);
  }
}
