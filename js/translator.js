import { alphaBet, morseCode } from './data.js'

export function convertToMorse (input) {

    //grab english text value
    //let textValue = englishText.value;
    //if nothing entered display error
    if (input == ''){
        return  alert('enter some english text to convert');
    }
    //new empty string to display converted text
    let convertedText = '';
    
    //loop over english text value
    for (var i = 0; i < input.length; i++) {
        //for each iteration loop over each charecter and see if
        // matches the alphabet array
        for (var j = 0; j < 27; j++) {
            //if it matches pass the morse into new variable
            if (input[i].toLowerCase() == alphaBet[j]) {
                convertedText += morseCode[j];
                break;
            }        
        }
    }

    //display it in morse box
    return convertedText
    
};