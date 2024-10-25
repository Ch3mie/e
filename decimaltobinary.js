function change(binary) {
  //let the decimal = the length of the binary
  //binary multiply each digit by 2^n
  //let n start at 0
  //add one to n from right to left
  //multiply 2^n by the digits of the binary

  let decimal = 0;
  let length = binary.length;

  for (let n = 0; n < length; n++) {
    if (binary[binary.length - 1 - n] === "1") {
      decimal = decimal + Math.pow(2, n);
      // decimal = decimal + 2^0
    }
  }
  return decimal;
}

console.log(change("1110"));

function dectobin(decimal) {
  let binary = "";
  while (decimal != 0) {
    if (decimal % 2 == 1) {
      binary += "1";
    } else {
      binary += "0";
    }
  }
}
