// AND - ko'paytirish - &&
// OR - qo'shish - ||
// NOT - inkor - !

let isBig = 20 > 18; // true
let isSmall = 23 < 21; // false

// console.log(isBig && isSmall) // 1 && 0 = 0
// console.log(isBig || isSmall) // 1 || 0 = 1
// console.log(!isBig);  // !1 = 0
// console.log(!isSmall); // !0 = 1

// let asadbekYoshi = 28, holbekYoshi = 31, dilshodbekYoshi = 22;

// if (dilshodbekYoshi < holbekYoshi) { // false
//   console.log("Holbekning yoshi katta!");
// } else {
//     console.log("Holbekning yoshi katta emas!");
// }

// if (asadbekYoshi > holbekYoshi) {
//     if(asadbekYoshi > dilshodbekYoshi) {
//         console.log("Asadbek hammadan katta!")
//     } else {
//         console.log("Dilshodbek hammadan katta!");
//     }
// } else {
//     if (holbekYoshi > dilshodbekYoshi) {
//       console.log("Holbek hammadan katta!");
//     } else {
//       console.log("Dilshodbek hammadan katta!");
//     }
// }

// Optimizatsiya qilingan

let asadbekYoshi = 18,
  holbekYoshi = 31,
  dilshodbekYoshi = 22;

// if (asadbekYoshi > holbekYoshi && asadbekYoshi > dilshodbekYoshi) console.log("Asadbek hammadan katta!");
// else if (holbekYoshi > dilshodbekYoshi) console.log("Holbek hammadan katta!");
// else console.log("Dilshodbek hammadan katta!");

let kimKatta =
  asadbekYoshi > holbekYoshi && asadbekYoshi > dilshodbekYosh
    ? "Asadbek hammadan katta!"
    : holbekYoshi > dilshodbekYoshi
    ? "Holbek hammadan katta!"
    : "Dilshodbek hammadan katta!";

// console.log(kimKatta)

let fasl = ""

switch ("2") {
    case "1":
        fasl = fasl + "Bahor"
    case "2": 
        fasl = fasl + "Yoz" // fasl = "Yoz"
    case "3": 
        fasl = fasl + "Kuz" // fasl = "YozKuz"
    case "4":
        fasl = fasl + "Qish" // fasl = "YozKuzQish"
    default:
        fasl = fasl + "Fasl yo'q!" // fasl = "YozKuzQishFasl yo'q!"
}

console.log(fasl)