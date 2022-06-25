let lesson = {
  vaqti: "10:00",
  davomiyligi: 2,
  teacher: "Diyorbek Olimov",
  gapirish: function () {
    console.log("Gapiryapman...");
  },
};

// lesson.gapirish();
// console.log(lesson.davomiyligi);
// console.log(lesson["davomiyligi"]);

// Math obyekti

// console.log(Math.PI)
// console.log(Math.floor(Math.PI))  // kichik tomonga yaxlitlash
// console.log(Math.ceil(Math.PI))   // katta tomonga yaxlitlash
// console.log(Math.round(3.6))      // matematik yaxlitlash
// console.log(Math.sqrt(16))          // ildiz
// console.log(Math.pow(2, 3))         // daraja hisoblash

// let ism = "O'lmasbek Olimov";
// let familiya = "Olimov";

// NaN - not a number
// console.log(ism.toLowerCase())
// console.log(ism.toUpperCase())
// console.log(ism.split("l"))
// console.log(ism.slice(6, 9))
// console.log(ism.indexOf("bek"))
// console.log(ism.lastIndexOf("bek"))
// console.log(ism.includes("bed"))
// console.log(ism * 2);
// console.log('2' * 2);

function repeat(text, num) {
  let result = "";
  if (num === undefined) return text;
  else if (num > 0) {
    for (let i = 1; i <= num; i++) {
      result += text;
    }
    return result;
  } else {
    return " ";
  }
}
// console.log(repeat("xd", 5));

let numbers = [11, 23, 46, 53, 24, 89];

function sum(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }

  return result;
}

// console.log(sum(numbers))

let ism = "Asadbek";

// console.log(ism.slice(4, 7))
// console.log(ism.indexOf("a"))
// console.log(ism.includes("ek"))

