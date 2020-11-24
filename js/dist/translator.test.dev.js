"use strict";

var _translator = require("./translator");

//valid inputs
it('should translate a to .-', function () {
  var result = (0, _translator.convertToMorse)('a');
  expect(result).toBe('.-');
}); //invalid inputs
//null inputs

it('should return alert message', function () {// const error = convertToMorse('6')
  // expect(error).toBe('this is an error')
});