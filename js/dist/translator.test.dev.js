"use strict";

var _translator = require("./translator");

var _data = require("./data");

it('should translate a to .-', function () {
  var result = (0, _translator.convertToMorse)('a');
  expect(result).toBe('.-');
}); //invalid inputs
//null inputs

it('should return alert message', function () {});