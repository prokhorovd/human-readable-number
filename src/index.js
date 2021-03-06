module.exports = function toReadable (number) {
  let readableNumber = "";
  let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', ]
  let tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let large = ['ten', 'hundred', 'thousand', 'million', 'billion', 'trillion'];
  //преобразуем число в array
  let stringNumber = number.toString();
  let numberArray = [];
  for (let i = 0; i < stringNumber.length; i++) {
    numberArray.push(stringNumber[i])
  }
  //check 100s
  if (numberArray.length == 3) {
    readableNumber += `${digits[numberArray[0]]} ${large[1]}`
    if (numberArray[1] == 0 && numberArray[2] == 0) {
      return readableNumber;
    }
    else {
      readableNumber += " ";
      numberArray.shift();
    }
  }
  //check 10s
  if (numberArray.length == 2) {
    // check 01-09
    if (numberArray[0] == 0) {
      readableNumber += `${digits[numberArray[1]]}`
      return readableNumber;
    }
    // check 10-19
    if (numberArray[0] == 1) {
      readableNumber += `${teens[numberArray[1]]}`
      return readableNumber;
    }
    // check 20, 30, 40 ... 90
    else if (numberArray[1] == 0) {
      readableNumber += `${tens[numberArray[0]]}`
      return readableNumber;
    }
    //check 21-99
    else {
      readableNumber += `${tens[numberArray[0]]}`;
      readableNumber += ` `;
      numberArray.shift()
    }
  }
  //check 1s
  if (numberArray.length == 1) {
    readableNumber += `${digits[numberArray[0]]}`
    return readableNumber;
  }
}
