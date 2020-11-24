import { covertToMorse, convertToMorse } from './translator';
import { alphaBet, morseCode } from './data'

//valid inputs
it ('should translate a to .-', () => {
const result = convertToMorse('a')
expect(result).toBe('.-')
})


//invalid inputs


//null inputs

it ( 'should return alert message', () => {

})