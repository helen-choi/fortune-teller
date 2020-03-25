class Content {
  constructor(data, contentElement, heroData) {
    this.luckyNumber = data.lucky_number;
    this.heroData = heroData;
    this.color = data.color;
    this.contentElement = contentElement;
  }
  render() {
    // all the dom manipulation with the data you have
  }
}
