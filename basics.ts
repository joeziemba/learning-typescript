console.log("Hello World!");

function add(n1: number, n2: number, printResult: boolean, message: string) {
  let result = n1 + n2;
  if (printResult) console.log(message + result);
  else return result;
}

let number1 = 5;
let number2 = 2.8;
let printResult = true;

// number1 = "5";

add(number1, number2, printResult, "Result is: ");
