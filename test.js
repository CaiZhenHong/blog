
let obj = { a: 1, b: 2, c: 3 }

for (const o in obj) {
  console.log(obj[o] = 123);
  console.log(obj);
}