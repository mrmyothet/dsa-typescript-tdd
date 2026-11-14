function div(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }

  return [a / b, undefined];
}

// let [result, error] = div(10, 0);
let [result, error] = div(10, 2);
if (error) {
  console.error(error.message);
}
else {
  console.log('result', result)
}