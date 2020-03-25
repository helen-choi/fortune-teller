class Input {
  constructor(bdayElement, form, zodiac) {
    this.bdayElement = bdayElement;
    this.form = form;
    this.zodiac = zodiac;
    this.handleSubmit = this.handleSubmit.bind(this)
    this.form.addEventListener('submit', this.handleSubmit);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.zodiac = '';
    var date = this.bdayElement.value.split('-');
      if (date[1] === '03' && date[2] >= '21' || date[1] === '04' && date[2] <= '19') {
        this.zodiac = 'aries';
      } else if (date[1] === '04' && date[2] >= '20' || date[1] === '05' && date[2] <= '20') {
        this.zodiac = 'taurus';
      } else if (date[1] === '05' && date[2] >= '21' || date[1] === '06' && date[2] <= '20') {
        this.zodiac = 'gemini';
      } else if (date[1] === '06' && date[2] >= '21' || date[1] === '07' && date[2] <= '22') {
        this.zodiac = 'cancer';
      } else if (date[1] === '07' && date[2] >= '23' || date[1] === '08' && date[2] <= '22') {
        this.zodiac = 'leo';
      } else if (date[1] === '08' && date[2] >= '23' || date[1] === '09' && date[2] <= '22') {
        this.zodiac = 'virgo';
      } else if (date[1] === '09' && date[2] >= '23' || date[1] === '10' && date[2] <= '22') {
        this.zodiac = 'libra';
      } else if (date[1] === '10' && date[2] >= '23' || date[1] === '11' && date[2] <= '21') {
        this.zodiac = 'scorpio';
      }else if (date[1] === '11' && date[2] >= '22' || date[1] === '12' && date[2] <= '21') {
        this.zodiac = 'saggitarius';
      } else if (date[1] === '12' && date[2] >= '22' || date[1] === '01' && date[2] <= '19') {
        this.zodiac = 'capricorn';
      } else if (date[1] === '01' && date[2] >= '20' || date[1] === '02' && date[2] <= '18') {
        this.zodiac = 'aquarius';
      } else if (date[1] === '02' && date[2] >= '19' || date[1] === '03' && date[2] <= '20') {
        this.zodiac = 'capricorn';
      }
    // console.log(this.zodiac);
    }
  }
