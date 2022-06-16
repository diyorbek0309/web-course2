let ismlar = ["Abbos", "Asad", "Diyor", "Quvonch", "Diyor"];

// for (let i = 1; i < ismlar.length; i = i + 2) {
//   console.log(ismlar[i] + "bek");
// }

let i = 0;

while (i < ismlar.length) {
  console.log(ismlar[i] + "bek");
  i++;
}

// for (let i = 0; i < ismlar.length; i++) {
//     if (i % 2) console.log(ismlar[i] + "bek"); // 0 = false; 1 = true
//     else continue;
// }

// 1-qadam. i = 0, ismlar[0] = "Abbos"

// let ismlar = ["Abbos", "Asad", "Diyor", "Quvonch", "Diyor"];

// for (let i = 0; i < ismlar.length; i++) {
//   if (ismlar[i] === "Diyor") {
//     console.log(ismlar[i] + "bek");
//     break;
//   } else {
//     continue;
//   }
// }

// Maqsad faqat Diyorbek chiqarish

// for (let i of ismlar) console.log(i + "bek");

// for of - massiv, string va boshqa iterable elementlar

let cobalt = {
  name: "Cobalt",
  color: "oq",
  year: 2020,
  price: 120,
};

// console.log(cobalt.name + "ning rangi " + cobalt.color)

let inson = { fname: "Abbosbek", lname: "Qutliyev", age: 17 };
let text = "";

for (let x in inson) {
  text += inson[x]; // text = text + inson[x]
  //   console.log(text)
}

// console.log(text);

//  for in - obyektlar uchun



