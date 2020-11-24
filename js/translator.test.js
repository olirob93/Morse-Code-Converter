import { convertToMorse } from './translator';


//valid inputs
it ('should translate a to .-', () => {
const result = convertToMorse('a')
expect(result).toBe('.-')
})


//invalid inputs


//null inputs

it ( 'should return alert message', () => {
// const error = convertToMorse('6')
// expect(error).toBe('this is an error')
})