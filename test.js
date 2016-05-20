import * as date_lib from './index';
const chai = require('chai');
const expect = chai.expect;


describe("getting a previous sunday", ()=>{
  let date, sunday, monday, tuesday, wednesday, thursday, friday, saturday;
  beforeEach(()=>{
    sunday    = new Date(2016, 4, 8);
    monday    = new Date(2016, 4, 9);
    tuesday   = new Date(2016, 4, 10);
    wednesday = new Date(2016, 4, 11);
    thursday  = new Date(2016, 4, 12);
    friday    = new Date(2016, 4, 13);
    saturday  = new Date(2016, 4, 14);
  })
  afterEach(()=>{
    date = undefined;
    sunday    = undefined;
    monday    = undefined;
    tuesday   = undefined;
    wednesday = undefined;
    thursday  = undefined;
    friday    = undefined;
    saturday  = undefined;
  })
  it("should return the same date if sunday is given", ()=>{
    expect(+(date_lib.sunday_of(sunday))).to.equal(+(sunday));
  })
  it("should return the sunday prior if monday is given", ()=>{
    expect(+(date_lib.sunday_of(monday))).to.equal(+(sunday));
  })
  it("should return the sunday prior if tuesday is given", ()=>{
    expect(+(date_lib.sunday_of(tuesday))).to.equal(+(sunday));
  })
  it("should return the sunday prior if wednesday is given", ()=>{
    expect(+(date_lib.sunday_of(wednesday))).to.equal(+(sunday));
  })
  it("should return the sunday prior if thursday is given", ()=>{
    expect(+(date_lib.sunday_of(thursday))).to.equal(+(sunday));
  })
  it("should return the sunday prior if friday is given", ()=>{
    expect(+(date_lib.sunday_of(friday))).to.equal(+(sunday));
  })
  it("should return the sunday prior if saturday is given", ()=>{
    expect(+(date_lib.sunday_of(saturday))).to.equal(+(sunday));
  })

  describe("when the week spans a month break", ()=>{
    beforeEach(()=>{
      sunday    = new Date(2016, 7, 28);
      monday    = new Date(2016, 7, 29);
      tuesday   = new Date(2016, 7, 30);
      wednesday = new Date(2016, 7, 31);
      thursday  = new Date(2016, 8, 1);
      friday    = new Date(2016, 8, 2);
      saturday  = new Date(2016, 8, 3);
    })
    afterEach(()=>{
      date = undefined;
      sunday    = undefined;
      monday    = undefined;
      tuesday   = undefined;
      wednesday = undefined;
      thursday  = undefined;
      friday    = undefined;
      saturday  = undefined;
    })
    it("should return the same date if sunday is given", ()=>{
      expect(+(date_lib.sunday_of(sunday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if monday is given", ()=>{
      expect(+(date_lib.sunday_of(monday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if tuesday is given", ()=>{
      expect(+(date_lib.sunday_of(tuesday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if wednesday is given", ()=>{
      expect(+(date_lib.sunday_of(wednesday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if thursday is given", ()=>{
      expect(+(date_lib.sunday_of(thursday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if friday is given", ()=>{
      expect(+(date_lib.sunday_of(friday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if saturday is given", ()=>{
      expect(+(date_lib.sunday_of(saturday))).to.equal(+(sunday));
    })
  });
  describe("when the week spans a year break", ()=>{
    beforeEach(()=>{
      sunday    = new Date(2015, 11, 27);
      monday    = new Date(2015, 11, 28);
      tuesday   = new Date(2015, 11, 29);
      wednesday = new Date(2015, 11, 30);
      thursday  = new Date(2015, 11, 31);
      friday    = new Date(2016, 0, 1);
      saturday  = new Date(2016, 0, 2);
    })
    afterEach(()=>{
      date = undefined;
      sunday    = undefined;
      monday    = undefined;
      tuesday   = undefined;
      wednesday = undefined;
      thursday  = undefined;
      friday    = undefined;
      saturday  = undefined;
    })
    it("should return the same date if sunday is given", ()=>{
      expect(+(date_lib.sunday_of(sunday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if monday is given", ()=>{
      expect(+(date_lib.sunday_of(monday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if tuesday is given", ()=>{
      expect(+(date_lib.sunday_of(tuesday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if wednesday is given", ()=>{
      expect(+(date_lib.sunday_of(wednesday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if thursday is given", ()=>{
      expect(+(date_lib.sunday_of(thursday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if friday is given", ()=>{
      expect(+(date_lib.sunday_of(friday))).to.equal(+(sunday));
    })
    it("should return the sunday prior if saturday is given", ()=>{
      expect(+(date_lib.sunday_of(saturday))).to.equal(+(sunday));
    })
  });
})

describe("getting weeks between two dates", ()=>{
  let past, future, diff;
  afterEach(()=>{
    past    = undefined;
    future  = undefined;
    diff  = undefined;
  })
  it("should say 5 weeks between 2016-4-8 to 2016-5-8 (both sundays)", ()=>{
    past    = new Date(2016, 4, 1);
    future  = new Date(2016, 5, 5);
    diff    = date_lib.weeks_between(past, future);
    expect(diff).to.equal(5);
  })
  it("should say 5 weeks between 2016-4-8 to 2016-5-11 (sunday to saturday)", ()=>{
    past    = new Date(2016, 4, 1);
    future  = new Date(2016, 5, 11);
    diff    = date_lib.weeks_between(past, future);
    expect(diff).to.equal(5);
  })
  it("should say 52 weeks between 2015-1-1 to 2016-1-1", ()=>{
    past    = new Date(2015, 1, 1);
    future  = new Date(2016, 1, 1);
    diff    = date_lib.weeks_between(past, future);
    expect(diff).to.equal(52);
  })
})

describe("getting the sunday of first full week of a month in a year", ()=>{
  let date;
  afterEach(()=>{
    date  = undefined;
  })
  it("should return the 3rd for Jan 2016", ()=>{
    date = +(date_lib.first_full_week(2016, 0));
    expect(date).to.equal(+(new Date(2016, 0, 3)));
  })
})

describe("getting the next year for a date", ()=>{
  let date, july_prior, next_july, a_year_later;
  beforeEach(()=>{
    date  = new Date(2015, 5, 15);
    a_year_later = date_lib.next_year(date);
    july_prior = date_lib.first_full_week(date.getFullYear(), date_lib.START_MONTH);
    next_july = date_lib.first_full_week(a_year_later.getFullYear(), date_lib.START_MONTH);
  })
  afterEach(()=>{
    date  = undefined;
    a_year_later = undefined;
    july_prior = undefined;
    next_july = undefined;
  })
  it("should be on the same day of the week", ()=>{
    expect(date.getDay()).to.equal(a_year_later.getDay());
  })
  it("should be the same number of weeks from the first full week of July", ()=>{
    let first_year = date_lib.weeks_between(july_prior, date);
    let second_year = date_lib.weeks_between(next_july, a_year_later);
    expect(first_year).to.equal(second_year);
  })
  it("should be a year later", ()=>{
    expect(date_lib.weeks_between(date, a_year_later)).to.equal(52)
  })
  describe("after july", ()=>{
    let date, july_prior, next_july, a_year_later;
    beforeEach(()=>{
      date  = new Date(2015, 9, 15);
      a_year_later = date_lib.next_year(date);
      july_prior = date_lib.first_full_week(date.getFullYear(), date_lib.START_MONTH);
      next_july = date_lib.first_full_week(a_year_later.getFullYear(), date_lib.START_MONTH);
    })
    afterEach(()=>{
      date  = undefined;
      a_year_later = undefined;
      july_prior = undefined;
      next_july = undefined;
    })
    it("should be on the same day of the week", ()=>{
      expect(date.getDay()).to.equal(a_year_later.getDay());
    })
    it("should be the same number of weeks from the first full week of July", ()=>{
      let first_year = date_lib.weeks_between(july_prior, date);
      let second_year = date_lib.weeks_between(next_july, a_year_later);
      expect(first_year).to.equal(second_year);
    })
    it("should be a year later", ()=>{
      expect(date_lib.weeks_between(date, a_year_later)).to.equal(52)
    })
  });
});

describe("getting many future years for a date", ()=>{
  let result, date, num_years
  beforeEach(()=>{
    num_years = 4;
    date = new Date(2015, 5, 15);
    result = date_lib.years_future(date, num_years);
  })
  afterEach(()=>{
    num_years = undefined;
    date = undefined;
    result = undefined;
  })
  it("should have the number of years asked for in the array", ()=>{
    expect(result.length).to.equal(num_years)
  })
  it("should return dates in the array", ()=>{
    expect(result.filter(d => d instanceof Date).length).to.equal(num_years)
  })
  it("the first two dates should be a year apart", ()=>{
    expect(date_lib.weeks_between(result[0], result[1])).to.equal(52);
  });
  it("the second two dates should be a year apart", ()=>{
    expect(date_lib.weeks_between(result[1], result[2])).to.equal(52);
  });
  it("the last two dates should be a year apart", ()=>{
    expect(date_lib.weeks_between(result[2], result[3])).to.equal(52);
  });
})
