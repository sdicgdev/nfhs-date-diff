(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first_full_week = first_full_week;
exports.weeks_between = weeks_between;
exports.sunday_of = sunday_of;
exports.next_year = next_year;
exports.years_future = years_future;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var WEEK_IN_MICROSECONDS = 604800000; //(24*60*60*7*1000)
var DAY_IN_MICROSECONDS = 86400000; //(24*60*60*1000)
var START_MONTH = exports.START_MONTH = 6; // JULY

// first full week in a month of a year
// returns midnight sunday of that week
function first_full_week(year, month) {
  var first_sunday = new Date(year, month, 1);
  if (first_sunday.getDay() !== 0) {
    first_sunday = sunday_of(new Date(year, month, 7));
  }
  return first_sunday;
}

function weeks_between(past, future) {
  var past_sunday = +sunday_of(past);
  var future_sunday = +sunday_of(future);
  return (future_sunday - past_sunday) / WEEK_IN_MICROSECONDS;
}

function sunday_of(date) {
  var result = date;
  var year = date.getFullYear();
  var month = date.getMonth();
  if (date.getDay() !== 0) {
    var day = date.getDate() - date.getDay();
    result = new Date(year, month, day, 0, 0, 0);
  }
  return result;
}

function next_year(date) {
  var start_month = arguments.length <= 1 || arguments[1] === undefined ? START_MONTH : arguments[1];

  var start_year = date.getFullYear();
  if (date.getMonth() < start_month) {
    start_year = date.getFullYear() - 1;
  }
  var week_number = weeks_between(first_full_week(start_year, start_month), date);
  var next_july = first_full_week(start_year + 1, start_month);
  var next_year_week = sunday_of(new Date(+next_july + week_number * WEEK_IN_MICROSECONDS));
  var day_of_week = date.getDay();

  return new Date(+next_year_week + DAY_IN_MICROSECONDS * day_of_week);
}

function years_future(date, num_years) {
  var result = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  if (!num_years) return result;
  var next_date = next_year(date);
  return years_future(next_date, num_years - 1, [].concat(_toConsumableArray(result), [next_date]));
}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZmlyc3RfZnVsbF93ZWVrID0gZmlyc3RfZnVsbF93ZWVrO1xuZXhwb3J0cy53ZWVrc19iZXR3ZWVuID0gd2Vla3NfYmV0d2VlbjtcbmV4cG9ydHMuc3VuZGF5X29mID0gc3VuZGF5X29mO1xuZXhwb3J0cy5uZXh0X3llYXIgPSBuZXh0X3llYXI7XG5leHBvcnRzLnllYXJzX2Z1dHVyZSA9IHllYXJzX2Z1dHVyZTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbnZhciBXRUVLX0lOX01JQ1JPU0VDT05EUyA9IDYwNDgwMDAwMDsgLy8oMjQqNjAqNjAqNyoxMDAwKVxudmFyIERBWV9JTl9NSUNST1NFQ09ORFMgPSA4NjQwMDAwMDsgLy8oMjQqNjAqNjAqMTAwMClcbnZhciBTVEFSVF9NT05USCA9IGV4cG9ydHMuU1RBUlRfTU9OVEggPSA2OyAvLyBKVUxZXG5cbi8vIGZpcnN0IGZ1bGwgd2VlayBpbiBhIG1vbnRoIG9mIGEgeWVhclxuLy8gcmV0dXJucyBtaWRuaWdodCBzdW5kYXkgb2YgdGhhdCB3ZWVrXG5mdW5jdGlvbiBmaXJzdF9mdWxsX3dlZWsoeWVhciwgbW9udGgpIHtcbiAgdmFyIGZpcnN0X3N1bmRheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcbiAgaWYgKGZpcnN0X3N1bmRheS5nZXREYXkoKSAhPT0gMCkge1xuICAgIGZpcnN0X3N1bmRheSA9IHN1bmRheV9vZihuZXcgRGF0ZSh5ZWFyLCBtb250aCwgNykpO1xuICB9XG4gIHJldHVybiBmaXJzdF9zdW5kYXk7XG59XG5cbmZ1bmN0aW9uIHdlZWtzX2JldHdlZW4ocGFzdCwgZnV0dXJlKSB7XG4gIHZhciBwYXN0X3N1bmRheSA9ICtzdW5kYXlfb2YocGFzdCk7XG4gIHZhciBmdXR1cmVfc3VuZGF5ID0gK3N1bmRheV9vZihmdXR1cmUpO1xuICByZXR1cm4gKGZ1dHVyZV9zdW5kYXkgLSBwYXN0X3N1bmRheSkgLyBXRUVLX0lOX01JQ1JPU0VDT05EUztcbn1cblxuZnVuY3Rpb24gc3VuZGF5X29mKGRhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IGRhdGU7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGlmIChkYXRlLmdldERheSgpICE9PSAwKSB7XG4gICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF0ZSgpIC0gZGF0ZS5nZXREYXkoKTtcbiAgICByZXN1bHQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5LCAwLCAwLCAwKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBuZXh0X3llYXIoZGF0ZSkge1xuICB2YXIgc3RhcnRfbW9udGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBTVEFSVF9NT05USCA6IGFyZ3VtZW50c1sxXTtcblxuICB2YXIgc3RhcnRfeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgaWYgKGRhdGUuZ2V0TW9udGgoKSA8IHN0YXJ0X21vbnRoKSB7XG4gICAgc3RhcnRfeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSAtIDE7XG4gIH1cbiAgdmFyIHdlZWtfbnVtYmVyID0gd2Vla3NfYmV0d2VlbihmaXJzdF9mdWxsX3dlZWsoc3RhcnRfeWVhciwgc3RhcnRfbW9udGgpLCBkYXRlKTtcbiAgdmFyIG5leHRfanVseSA9IGZpcnN0X2Z1bGxfd2VlayhzdGFydF95ZWFyICsgMSwgc3RhcnRfbW9udGgpO1xuICB2YXIgbmV4dF95ZWFyX3dlZWsgPSBzdW5kYXlfb2YobmV3IERhdGUoK25leHRfanVseSArIHdlZWtfbnVtYmVyICogV0VFS19JTl9NSUNST1NFQ09ORFMpKTtcbiAgdmFyIGRheV9vZl93ZWVrID0gZGF0ZS5nZXREYXkoKTtcblxuICByZXR1cm4gbmV3IERhdGUoK25leHRfeWVhcl93ZWVrICsgREFZX0lOX01JQ1JPU0VDT05EUyAqIGRheV9vZl93ZWVrKTtcbn1cblxuZnVuY3Rpb24geWVhcnNfZnV0dXJlKGRhdGUsIG51bV95ZWFycykge1xuICB2YXIgcmVzdWx0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gW10gOiBhcmd1bWVudHNbMl07XG5cbiAgaWYgKCFudW1feWVhcnMpIHJldHVybiByZXN1bHQ7XG4gIHZhciBuZXh0X2RhdGUgPSBuZXh0X3llYXIoZGF0ZSk7XG4gIHJldHVybiB5ZWFyc19mdXR1cmUobmV4dF9kYXRlLCBudW1feWVhcnMgLSAxLCBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHJlc3VsdCksIFtuZXh0X2RhdGVdKSk7XG59Il19
