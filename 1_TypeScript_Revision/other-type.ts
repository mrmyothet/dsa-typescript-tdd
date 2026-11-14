function getNothing(): void {
  console.log("print something");
  return;
}

let data: object = {};
data = {
  name: "John",
  age: 35,
};

console.log("data", data);

data = () => console.log("fun");
console.log("data", (data as any).name);
