
var mul = 10;
var paddingChar = " ";

function evalNoOfDigit(x) {
  return x.toString().length;
}

function getStringfiedNumberWithPadding(x, fullLength) {
  var repeatTimes = fullLength - x.toString().length;
  return paddingChar.repeat(repeatTimes) + x.toString();
}
var fullLength = evalNoOfDigit(mul * mul);

for (let i = 1; i <= mul; i++) {
  var row = paddingChar.repeat(evalNoOfDigit(mul) - evalNoOfDigit(i)) + `${i} `;
  for (let j = 1; j <= mul; j++) {
    let result = i * j;
    let resultStr = "";

    if (result < 100) {
      if (result < 10) {
        resultStr = paddingChar.repeat(fullLength - 1) + `${result} `;
      }
      else {
        resultStr = paddingChar.repeat(fullLength - 2) + `${result} `;
      }
    }
    else {
      resultStr = `${result} `;
    }
    row += resultStr;
  }
  console.log(row);
}
