let mevalar = ["olma", "olcha", "anor", "banan"];

// mevalar.push("shaftoli"); // oxiridan qo'shish
// mevalar.pop();            // oxiridan o'chirish
// mevalar.unshift("shaftoli")  // boshidan qo'shadi
// mevalar.shift();             // boshidan o'chiradi
// mevalar.push("shaftoli").pop().unshift("shaftoli").shift();
// mevalar.sort().reverse();
// numbers.sort(function(x, y) {
//     return y - x;
// })
//  method chaining - metodlar zanjiri

// console.log(mevalar.slice(1, 3));
// console.log(mevalar.splice(1, 0, "shaftoli", "o'rik", "uzum"));
// console.log(mevalar.splice(1, 3));
// console.log(mevalar.splice(1, 2, "shaftoli", "o'rik"));
// console.log(mevalar.join(" meva "));
// console.log(mevalar);
// console.log(numbers);

let numbers = [45, 23, 56, 89, 65, 92];

// 50 dan kichik sonlarni chiqarish

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 50) console.log(numbers[i]);
// }

// numbers.forEach(function (element, index) {
//     console.log("Element: ", element)
//     console.log("Index: ", index)
//     // if (element < 50) console.log(element)
// })

// numbers.forEach(element => {
//     if (element < 50) console.log(element);
// })

// numbers.map(function (element) {
//   if (element < 50) console.log(element)
// });

/* 
    1. Funksiya yaratishlariz kerak, bu funksiya 2 argument oladi, 1-si sonlar massiv, raqam.
    2. Massivning 1- va oxirgi, 2- va oxirgidan bir oldingi va hokazo o'rindagi elementlaridan yangi massiv hosil qilib, chiqaradigan funksiya tuzing. 
*/
