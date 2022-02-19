const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arrayOfExpr = expr.match(/.{1,2}/g); //division on 3 spaces
  // console.log("arrayOfExpr-" + arrayOfExpr);
  let morseWord = ""; //init
  const str_len = 10; //task condition If the length of the encoded letter is less then 10, it left padded with 0.

  while (arrayOfExpr.length) {
    let res = [];

    let encodedLetter = arrayOfExpr.splice(0, str_len / 2); //division string for 2 elem

    encodedLetter.forEach((code) => {
      if (code == 10 || code == 11 || code == "**") {
        res.push(code);
      }
    });
    if (res.length > 0) {
      res = res.join("").replace(/10/g, ".").replace(/11/g, "-");

      if (res === "**********") {
        res = " ";
      }
      if (res === " ") {
        morseWord += res;
      } else {
        morseWord += MORSE_TABLE[res];

      }
    }
  }

  return morseWord;
}

module.exports = {
    decode
}
