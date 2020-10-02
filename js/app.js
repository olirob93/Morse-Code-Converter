//grab eng to morse button
const engToMorseBtn = document.querySelector('.eng-to-morse');
//grab english input
const englishText = document.querySelector('.english-text');
//grab display input
const morseText = document.querySelector('.morse-text');
//grab morse to eng button
const morseToEng = document.querySelector('.morse-to-eng');
//grab clear button
const clearBtn = document.querySelector('.clear');

function convertToMorse () {

    const alphaBet = [
       ' ', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ];
    
    const morseCode = [ 
            ' ', '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-',
    '..--', '...-', '.--', '-..-', '-.--', '--..'
    ];

//grab english text value
let textValue = englishText.value;
//if nothing entered display error
if (englishText.value == ''){
  return  alert('enter some english text to convert');
}
//new empty string to display converted text
let convertedText = '';

//loop over english text value
for (var i = 0; i < textValue.length; i++) {
    //for each iteration loop over each charecter and see if
    // matches the alphabet array
    for (var j = 0; j < 27; j++) {
        //if it matches pass the morse into new variable
        if (textValue[i].toLowerCase() == alphaBet[j]) {
            convertedText += morseCode[j];
            break;
        }        
    }
}
//display it in morse box
morseText.value = convertedText

};

function clear () {
englishText.value = '';
morseText.value = ''
}

/*function convertToEng () {

    const alphaBet = [
       ' ', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ];
    
    const morseCode = [ 
            ' ', '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-',
    '..--', '...-', '.--', '-..-', '-.--', '--..'
    ];

//grab morse text value
let textValue = morse.value;
//new empty string to display converted text
let convertedText = '';

//loop over english text value
for (var i = 0; i < textValue.length; i++) {
    //for each iteration loop over each charecter and see if
    // matches the alphabet array
    for (var j = 0; j < 27; j++) {
        //if it matches pass the morse into new variable
        if (textValue[i].toLowerCase() == alphaBet[j]) {
            convertedText += morseCode[j];
            break;
        }        
    }
}
//display it in morse box
morseText.value = convertedText

};*/
    
engToMorseBtn.addEventListener('click', convertToMorse);
clearBtn.addEventListener('click', clear);

//engToMorse.addEventListener('click', convertToEng)




