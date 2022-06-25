// 1. Input: 22/06/2022
//    Output: 22-iyun 2022-yil

function dateConverter(shortFormat) {
  let longFormat = "";
  let date = shortFormat.split("/");
  console.log(date);
  let index_oy = shortFormat[3] + shortFormat[4];
  let oylar = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentyabr",
    "oktyabr",
    "noyabr",
    "dekabr",
  ];

  let oy = oylar[+index_oy - 1];
  console.log(oy);
  // switch (+index_oy) {
  //     case 1:
  //         oy = "yanvar"
  //         break;
  //     case 2:
  //         oy = "fevral";
  //         break;
  //     case 3:
  //         oy = "mart";
  //         break;
  //     case 4:
  //         oy = "aprel";
  //         break;
  //     case 5:
  //         oy = "may";
  //         break;
  //     case 6:
  //         oy = "iyun";
  //         break;
  //     case 7:
  //         oy = "iyul";
  //         break;
  //     case 8:
  //         oy = "avgust";
  //         break;
  //     case 9:
  //         oy = "sentyabr";
  //         break;
  //     case 10:
  //         oy = "oktyabr";
  //         break;
  //     case 11:
  //         oy = "noyabr";
  //         break;
  //     case 12:
  //         oy = "dekabr";
  //         break;

  //     default:
  //         oy = "bunday oy yuq";
  //         break;
  // }
  longFormat =
    parseInt(shortFormat[0] + shortFormat[1]) +
    "-" +
    oy +
    " " +
    shortFormat[6] +
    shortFormat[7] +
    shortFormat[8] +
    shortFormat[9] +
    "-yil";
  return longFormat;
}

// console.log(dateConverter("2/9/2022"));

// function convert(minute) {
//   return minute * 60;
// }

// const convert = (minutes) => 60 * minutes;

// console.log(convert(10));

function reverse(massiv) {
  let massiv2 = [];
  for (let i = 0; i < massiv.length; i++) {
    massiv2[i] = massiv[massiv.length - 1 - i];
  }
  return massiv2;
}
// console.log(reverse([1, 2, 3, 4]));

function fizzBuzz(input) {
  for (let i = 1; i <= input; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0 && i % 5 !== 0) console.log("Fizz");
    else if (i % 3 !== 0 && i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

// fizzBuzz(30);

// let output = fizzBuzz(13);
// console.log(output);

// function fizzBuzz(input) {
//   if (input % 15 === 0) return "FizzBuzz";
//   else if (input % 3 === 0 && input % 5 !== 0) return "Fizz";
//   else if (input % 3 !== 0 && input % 5 === 0) return "Buzz";
//   else return input;
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
//   else if (i % 3 == 0) console.log("Fizz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// let soat = "12:15 AM";
// let turi = soat.split(" ");
// console.log(turi)

// if (turi[1] == "PM")
//   console.log(12 + parseInt(soat[0] + soat[1]) + soat[2] + soat[3] + soat[4]);

// else if (soat[0] + soat[1] == "12") console.log("00:00");

// else console.log(turi[0]);
