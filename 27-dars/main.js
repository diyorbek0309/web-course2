"use strict";

let ismlar = ["Abbos", "Asad", "Diyor", "Quvonch", "Diyor"];

// for (let i = 1; i < ismlar.length; i = i + 2) {
//   console.log(ismlar[i] + "bek");
// }

// let i = 0;

// while (i < ismlar.length) {
//   console.log(ismlar[i] + "bek");
//   i++;
// }

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

// var array = [1, 2, 3, 4, 5, 6],
//   s = 0,
//   i;
// for (i = 0; i < array.length; i++) {
//   s += array[i];
// }
// console.log("Sum : " + s);

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for(let i = 0; i <= 100; i++) {
//    if(i%2==0)
//   {
//     console.log(i, " is Even Number");
//   }
//   else
//   {
//     console.log(i, " is Odd Number");
//   }
// }

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   sum = 0,
//   i;
// for (i = 0; i < array.length; i += 1) {
//   sum += array[i];
// }

// console.log("Sum : " + sum);

// for (let i = 2; i <= 100; i += 2) console.log(i);

// let xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i of xd) {
//   sum += i;
// }
// console.log(sum);

function sum(massiv) {
  let s = 0;
  for (let i = 0; i < massiv.length; i++) {
    s = s + massiv[i];
  }
  console.log(s);
}

// sum([23, 25, 19, 28]);
// sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// for (let son = 1; son <= 100; son++) {
//   if (son % 2 == 0) {
//     console.log(son);
//   }
// }


// 22/06/2022  -  22-iyun 2022-yil