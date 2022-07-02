let name1 = "Diyorbek";
let name2 = name1;
name2 = "Abbosbek";

let laptop1 = {
  brand: "Apple",
  model: "Macbook Pro",
  year: 2020,
  memory: {
    ram: "8GB",
    rom: "512GB",
  },
};


let laptop2 = laptop1;

laptop2.brand = "Dell";

// console.log(name1 === name2);
// console.log(name1, name2);
// console.log(laptop2);
// console.log(laptop1);

// Arrow function

// function add(a, b) {
//   return a + b;
// }

let add1 = (a, b) => a + b;

// console.log(add(5, 7));

// Currying function

let add2 = (a) => (b) => a + b;
// console.log(add2(5)(7));

// console.log(Math.round(Math.random() * 4));

console.log("8" + 3 - "8")