// filter

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evens = numbers.filter(function (number) {
  return !(number % 2);
});

// [2, 4, 6, 8, 10];
// console.log(evens);

let ismlar = [
  "Diyorbek",
  "Qambar",
  "Abbosbek",
  "Matrasul",
  "Shodlik",
  "Bekzod",
];

let filteredNames = ismlar.filter(function (name) {
  return name.includes("bek");
});

// console.log(filteredNames);

// find

let laptops = [
  { name: "Macbook", price: 1500 },
  { name: "Asus", price: 1000 },
  { name: "Dell", price: 1000 },
  { name: "HP", price: 700 },
  { name: "Acer", price: 600 },
];

// console.log(laptops[2].price)

let laptop1 = laptops.find(function (laptop) {
  return laptop.price === 1000;
});

let laptop2 = laptops.filter(function (laptop) {
  return laptop.price === 1000;
});

// console.log(laptop1);
// console.log(laptop2);

// s = ewo;
// t = "Hello world"  // true

// function isSubsequence(s, t) {}
