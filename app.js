class App {
  constructor(zodiac) {
    this.zodiac = zodiac;
  }
  start() {
    this.getFortune();
    this.getHero();
  }
  getFortune() {
    $.ajax({
      type: 'POST',
      url: 'https://aztro.sameerkumar.website?sign=' + this.zodiac + '&day=today',
      success: this.handleFortuneSuccess
    });
  }
  handleFortuneSuccess(data) {
    console.log(data.description);
  }
  getHero() {
    $.ajax({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/" + "https://superheroapi.com/api/10206439610825727/307",
      success: this.getHeroSuccess
    });
  }
  getHeroSuccess(data) {
    console.log(data.name)
  }
}
