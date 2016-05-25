(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.NFHSDateDiff = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

  return new Date(next_year_week.getFullYear(), next_year_week.getMonth(), next_year_week.getDate() + date.getDay(), date.getHours(), date.getMinutes(), date.getSeconds());
}

function years_future(date, num_years) {
  var result = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

  if (!num_years) return result;
  var next_date = next_year(date);
  return years_future(next_date, num_years - 1, [].concat(_toConsumableArray(result), [next_date]));
}
},{}]},{},[1])(1)
});