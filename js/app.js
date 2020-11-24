import { convertToMorse } from './translator.js'
import { engToMorseBtn, clearBtn, englishText, morseText } from './dom.js'

convertToMorse

function clear () {
englishText.value = '';
morseText.value = ''
}
    
engToMorseBtn.addEventListener('click', () => {
    const input = englishText.value;
    morseText.value = convertToMorse(input)
});
clearBtn.addEventListener('click', clear);

//engToMorse.addEventListener('click', convertToEng)




