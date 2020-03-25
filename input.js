class Input {
  constructor(bdayElement, form, zodiac) {
    this.bdayElement = bdayElement;
    this.form = form;
    this.zodiac = zodiac;
    this.form.addEventListener('submit', this.handleSubmit);
  }
  handleSubmit(event) {
    event.preventDefault();
    var date = bdayElement.value.split('-');
      if (date[1] === '03' && date[2] >= '21' || date[1] === '04' && date[2] <= '19') {
        zodiac = 'aries';
      } else if (date[1] === '04' && date[2] >= '20' || date[1] === '05' && date[2] <= '20') {
        zodiac = 'taurus';
      } else if (date[1] === '05' && date[2] >= '21' || date[1] === '06' && date[2] <= '20') {
        zodiac = 'gemini';
      } else if (date[1] === '06' && date[2] >= '21' || date[1] === '07' && date[2] <= '22') {
        zodiac = 'cancer';
      } else if (date[1] === '07' && date[2] >= '23' || date[1] === '08' && date[2] <= '22') {
        zodiac = 'leo';
      } else if (date[1] === '08' && date[2] >= '23' || date[1] === '09' && date[2] <= '22') {
        zodiac = 'virgo';
      } else if (date[1] === '09' && date[2] >= '23' || date[1] === '10' && date[2] <= '22') {
        zodiac = 'libra';
      } else if (date[1] === '10' && date[2] >= '23' || date[1] === '11' && date[2] <= '21') {
        zodiac = 'scorpio';
      }else if (date[1] === '11' && date[2] >= '22' || date[1] === '12' && date[2] <= '21') {
        zodiac = 'saggitarius';
      } else if (date[1] === '12' && date[2] >= '22' || date[1] === '01' && date[2] <= '19') {
        zodiac = 'capricorn';
      } else if (date[1] === '01' && date[2] >= '20' || date[1] === '02' && date[2] <= '18') {
        zodiac = 'aquarius';
      } else if (date[1] === '02' && date[2] >= '19' || date[1] === '03' && date[2] <= '20') {
        zodiac = 'capricorn';
      }
    console.log(zodiac);
    }
  }
