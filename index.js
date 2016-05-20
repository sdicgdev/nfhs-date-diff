
const WEEK_IN_MICROSECONDS = 604800000; //(24*60*60*7*1000)
const DAY_IN_MICROSECONDS = 86400000; //(24*60*60*1000)
export const START_MONTH = 6; // JULY

// first full week in a month of a year
// returns midnight sunday of that week
export function first_full_week(year, month){
  let first_sunday = new Date(year, month, 1);
  if(first_sunday.getDay() !== 0){
    first_sunday = sunday_of(new Date(year, month, 7));
  }
  return first_sunday;
}

export function weeks_between(past, future){
  const past_sunday = +(sunday_of(past));
  const future_sunday = +(sunday_of(future));
  return (future_sunday - past_sunday)/WEEK_IN_MICROSECONDS;
}

export function sunday_of(date){
  let result = date;
  let year = date.getFullYear();
  let month = date.getMonth();
  if(date.getDay() !== 0) {
    let day = date.getDate() - date.getDay();
    result = new Date(year, month, day, 0, 0, 0);
  }
  return result
}

export function next_year(date, start_month=START_MONTH){
  let start_year = date.getFullYear();
  if(date.getMonth() < start_month){
    start_year = date.getFullYear() - 1;
  }
  const week_number = weeks_between(first_full_week(start_year, start_month), date)
  const next_july = first_full_week(start_year+1, start_month);
  const next_year_week = sunday_of(new Date(+(next_july)+(week_number*WEEK_IN_MICROSECONDS)));
  const day_of_week = date.getDay();

  return new Date(+(next_year_week)+(DAY_IN_MICROSECONDS*day_of_week));
}

export function years_future(date, num_years, result=[]) {
  if(!num_years) return result;
  const next_date = next_year(date);
  return years_future(next_date, num_years - 1, [...result, next_date]);
}
