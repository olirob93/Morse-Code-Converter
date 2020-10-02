
//grab button
const engToMorse = document.querySelector('.eng-to-morse');
//grab english input
const englishText = document.querySelector('.english-text');
//grab display input
const morseText = document.querySelector('.morse-text');

const morseToEng = document.querySelector('.morse-to-eng')

//create event listner for button 


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

function convertToEng () {

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

};
    
engToMorse.addEventListener('click', convertToMorse)

engToMorse.addEventListener('click', convertToEng)




