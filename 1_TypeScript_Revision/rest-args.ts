function sum(...args: number[]) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log("sum", sum(1, 2, 3, 4, 5));
console.log("sum", sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
