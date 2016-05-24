NFHS Extended Contract Dates
----------------------------

The day of the week that an event occurs on is important for
setting dates for events. As a result, the NFHS has opted to 
provide a guideline for determining when events should occur
in future years. This library codifies those suggestions into
a few javascript functions 

Primary Functions
-----------------

```javascript
export function years_future(date, num_years)
```
return an array of JS Date objects representing progressive 
dates each one year further into the future than the last. The 
number of dates returned in the array will be equal to the 
number of years into the future requested

```javascript
next_year(date, start_month=6)
```
return a JS Date object representing the same number of weeks
from the first full week of the given start month as the JS Date
object is from the first full week of the given start month of 
the following season

Exposed Helper Functions
------------------------

```javascript
first_full_week(year, month)
```
returns a JS Date object representing midnight on Sunday
of the first full week of a month, given a year. Months are
passed in as integer values, with 0 indicating January and 
11 indicating December, as is default in JS

```javascript
weeks_between(past, future)
```
returns the number of weeks between two dates. Dates must be
in proper chronological order, and must be JS Date objects

```javascript
export function sunday_of(date)
```
return a JS Date object representing midnight on the sunday
prior to the JS Date object given as the argument.
