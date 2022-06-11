function salomBeruvchi(ism) {
  let salom = ism.map((item) => {
    return "Assalomu aleykum, " + item;
  });
  return salom;
}

// console.log(
//   salomBeruvchi([
//     "Diyorbek",
//     "Abbosbek",
//     "Dilshodbek",
//     "Qambar",
//     "Holbek",
//     "Rasulbek",
//   ])
// );
// console.log(salomBeruvchi("Dilshodbek"));
// console.log(salomBeruvchi("Abbosbek"));

// let ism1 = "Diyorbek"
// let ism2 = "Abbosbek"
// let ism3 = "Dilshodbek"

let ismlar = [
  "Diyorbek",
  "Abbosbek",
  "Dilshodbek",
  "Qambar",
  "Matrasul",
  "Otabek",
  21,
  17,
  undefined,
  22,
  18,
  true,
  19,
  17,
];

// console.log(ismlar.length); // massiv uzunligini qaytaradi
// console.log("1-si ",ismlar[1]);
// console.log(ismlar[5]);

// ismlar[1] = "Asadbek";
// console.log("2-si ", ismlar[1]);

// console.log("Assalomu aleykum, " + ism1);
// console.log("Assalomu aleykum, " + ism2);
// console.log("Assalomu aleykum, " + ism3);

// Objects

let laptop = {
  model: "HP",
  price: "600$",
  color: "gray",
  weight: 2.5,
  xotira: {
    hdd: 1000,
    ssd: 256,
  },
  salomBerish: function (ism) {
    console.log("Assalomu aleykum, " + ism);
  },
};

// laptop - nomi, model - property(xossa), HP - value(qiymat)

console.log(laptop.price); // dot notaion
// console.log(laptop["pirce"]);
// console.log(laptop.xotira.ssd);
// laptop.salomBerish("Diyorbek");

console.log(typeof salomBeruvchi);
console.log(typeof ismlar);
console.log(typeof laptop);
