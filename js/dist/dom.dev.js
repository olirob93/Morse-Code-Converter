"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearBtn = exports.morseToEng = exports.morseText = exports.englishText = exports.engToMorseBtn = void 0;
//grab eng to morse button
var engToMorseBtn = document.querySelector('.eng-to-morse'); //grab english input

exports.engToMorseBtn = engToMorseBtn;
var englishText = document.querySelector('.english-text'); //grab display input

exports.englishText = englishText;
var morseText = document.querySelector('.morse-text'); //grab morse to eng button

exports.morseText = morseText;
var morseToEng = document.querySelector('.morse-to-eng'); //grab clear button

exports.morseToEng = morseToEng;
var clearBtn = document.querySelector('.clear');
exports.clearBtn = clearBtn;