// 1. Input: 22/06/2022
//    Output: 22-iyun 2022-yil

function dateConverter(shortFormat) {
  let longFormat = "";
  let date = shortFormat.split("/");
  console.log(date)
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
