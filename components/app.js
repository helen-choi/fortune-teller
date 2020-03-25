class App {
  constructor(input, fortune, zodiac) {
    this.input = input;
    this.fortune = fortune;
    this.zodiac = zodiac;
    this.handleFortuneSuccess = this.handleFortuneSuccess.bind(this);
    this.getHeroSuccess = this.getHeroSuccess.bind(this);
  }
  start() {
    this.getFortune();
    this.getHero();
    this.input.handleSubmit();
  }
  getFortune() {
    $.ajax({
      type: 'POST',
      url: 'https://aztro.sameerkumar.website?sign=' + this.zodiac + '&day=today',
      success: this.handleFortuneSuccess
    });
  }
  handleFortuneSuccess(data) {
    // console.log(data);
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
}
