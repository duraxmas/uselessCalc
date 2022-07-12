let a = "", b = "", sign = "", finish;

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const actions = ["/", "x", "-", "+"];

const curNum = document.querySelector(".result");

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

  curNum.innerText = "";

  const key = tgt.textContent;

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
        a = a / b;
        break;
      case "x":
        a = a * b;
        break;
    }
    finish = true;
    curNum.innerText = a;
  }

  const curLength = curNum.textContent.length;

  curLength > 8 ?
    curNum.style.fontSize = "32px" :
    curLength > 7 ?
      curNum.style.fontSize = "36px" :
      curLength > 6 ?
        curNum.style.fontSize = "40px" :
        curNum.style.fontSize = "44px";
}