function FactorsOfN(n) {
  //guard pause
  if (n <= 0) {
    return "negative number or 0";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(6));

function newFactorial(n) {
  if (n > 0) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  } else return "error";
}
