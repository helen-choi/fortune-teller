class Input {
  constructor(bdayElement, form) {
    this.bdayElement = bdayElement;
    this.form = form;
    this.zodiac = null;
    this.getFortune = null;
    this.getHero = null;
    this.handleSubmit = this.handleSubmit.bind(this)
    this.form.addEventListener('submit', this.handleSubmit);
  }
  onSubmit(getFortune, getHero, smoothScroll) {
    this.getFortune = getFortune;
    this.getHero = getHero;
    this.smoothScroll = smoothScroll;
  }
  handleSubmit(event) {
    event.preventDefault();
    this.zodiac = '';
    var date = this.bdayElement.value.split('-');
    var dayNumber = parseInt(date[2]);
      if (date[1] === '03' && dayNumber >= 21 || date[1] === '04' && dayNumber <= 19) {
        this.zodiac = 'aries';
      } else if (date[1] === '04' && dayNumber >= 20 || date[1] === '05' && dayNumber <= 20) {
        this.zodiac = 'taurus';
      } else if (date[1] === '05' && dayNumber >= 21 || date[1] === '06' && dayNumber <= 20) {
        this.zodiac = 'gemini';
      } else if (date[1] === '06' && dayNumber >= 21 || date[1] === '07' && dayNumber <= 22) {
        this.zodiac = 'cancer';
      } else if (date[1] === '07' && dayNumber >= 23 || date[1] === '08' && dayNumber <= 22) {
        this.zodiac = 'leo';
      } else if (date[1] === '08' && dayNumber >= 23 || date[1] === '09' && dayNumber <= 22) {
        this.zodiac = 'virgo';
      } else if (date[1] === '09' && dayNumber >= 23 || date[1] === '10' && dayNumber <= 22) {
        this.zodiac = 'libra';
      } else if (date[1] === '10' && dayNumber >= 23 || date[1] === '11' && dayNumber <= 21) {
        this.zodiac = 'scorpio';
      }else if (date[1] === '11' && dayNumber >= 22 || date[1] === '12' && dayNumber <= 21) {
        this.zodiac = 'sagittarius';
      } else if (date[1] === '12' && dayNumber >= 22 || date[1] === '01' && dayNumber <= 19) {
        this.zodiac = 'capricorn';
      } else if (date[1] === '01' && dayNumber >= 20 || date[1] === '02' && dayNumber <= 18) {
        this.zodiac = 'aquarius';
      } else if (date[1] === '02' && dayNumber >= 19 || date[1] === '03' && dayNumber <= 20) {
        this.zodiac = 'pisces';
      }
    this.getFortune(this.zodiac);
    this.getHero();
    event.target.reset();
    }
  }
