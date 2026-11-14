function firstElement<T>(arr: T[]) {
  return arr[0];
}

console.log(firstElement<string>(["A", "B", "C"]).toLocaleLowerCase());
