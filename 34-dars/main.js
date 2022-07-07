let input_text = "";
let input = document.getElementById("input");
let clearBtn = document.getElementById("clear");
let bs = document.getElementById("bs");

function output(text) {
  if (text === "o_qavs") input_text += "(";
  else if (text === "y_qavs") input_text += ")";
  else input_text += text;

  input.value = input_text;
}

function hisoblash() {
  input.value = eval(input_text);
  input_text = input.value;
}

function clear() {
  input.value = " ";
  input_text = " ";
}

function backSpace() {
  input_text = input_text.slice(0, input_text.length - 1);
  input.value = input_text;
}

clearBtn.addEventListener("click", clear);
bs.addEventListener("click", backSpace);
