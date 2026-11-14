interface Pair<T, U> {
  first: T;
  second: U;
}

let pair: Pair<number, string> = {
  first: 10,
  second: "Hello",
};

console.log("Pair", pair);

let anotherPair: Pair<boolean, number> = {
  first: true,
  second: 42,
};
console.log("Another Pair", anotherPair);

//tuple
let tuple: [number, string] = [1.347, "one"];
console.log("Tuple", tuple);

console.log("Tuple first element", tuple[0].toFixed(2));
console.log("Tuple second element", tuple[1].toUpperCase());
