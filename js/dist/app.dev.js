"use strict";

var _translator = require("./translator.js");

var _dom = require("./dom.js");

_translator.convertToMorse;

function clear() {
  _dom.englishText.value = '';
  _dom.morseText.value = '';
}

_dom.engToMorseBtn.addEventListener('click', function () {
  var input = _dom.englishText.value;
  _dom.morseText.value = (0, _translator.convertToMorse)(input);
});

_dom.clearBtn.addEventListener('click', clear); //engToMorse.addEventListener('click', convertToEng)