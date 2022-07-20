let a = "", b = "", sign = "", finish;

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const actions = ["/", "x", "-", "+"];

let curNum = document.querySelector(".result");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = "false";
  curNum.innerText = "";
}

document.querySelector(".ac").addEventListener("click", clearAll);

document.querySelector(".mid").addEventListener("click", doSmth);

function doSmth(event) {
  const tgt = event.target
  if (tgt.classList.contains("ac")) return;
  if (!tgt.classList.contains("btn")) return;

  const key = tgt.textContent;
  let curLength = curNum.textContent.length;
  if (curLength === 11 && numbers.includes(key)) return;

  curNum.innerText = "";
  console.log(curNum.innerText);

  if (numbers.includes(key)) {
    if (b == "" && sign == "") {
      a += key;
      curNum.innerText = a;
    } else if (a != "" && b != "" && finish) {
      b = key;
      finish = false;
      curNum.innerText = b;
    } else {
      b += key;
      curNum.innerText = b;

    }
  }
  if (actions.includes(key)) {
    sign = key;
    curNum.innerText = sign;
  }
  // if (key == "%") {
  //   curNum.innerText = a/
  // }
  if (key == "=") {
    if (b == "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "/":
        if (b == 0) {
          curNum.innerText = "Error"
          a = "";
          b = "";
          sign = "";
          return
        }
        a = a / b;
        break;
      case "x":
        a = a * b;
        break;
    }
    finish = true;
    curNum.innerText = checkNumLength(a.toString());
  }
  curNum.innerText = addSpacesToNumber(curNum.innerText);
}

function addSpacesToNumber(str) {
  const s = str.length;
  const chars = str.split('');

  const strWithSpaces = chars.reduceRight((acc, char, i) => {
    const space = ((((s - i) % 3) === 0) ? ' ' : '');
    return (space + char + acc);
  }, '');
  return  ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}

function checkNumLength(str) {
  console.log(str);
  if (str.length < 12) {
    return str
  } else {
    if (str[12] == ".") {
      return str[13] >= 5 ?
        str.slice(10) + ((+str[11] + 1).toString()) :
        curNum.innerText.slice(11)
    } else {
      return curNum.innerText[12] >= 5 ?
        str.slice(10) + ((+str[11] + 1).toString()) :
        str.slice(11)
    }
  }
}



