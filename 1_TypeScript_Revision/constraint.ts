function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

console.log("longest", longest([1, 2], [1, 2, 3]));
console.log("longest", longest("alice", "bob"));

let first_arg: number = 10;
let second_arg: string = "hello";

// console.log("longest", longest(10, 3)); // ERROR
// console.log("longest", longest(first_arg, second_arg));// ERROR
