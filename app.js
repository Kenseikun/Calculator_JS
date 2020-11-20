const operationWrapper = document.querySelector(".operation__wrapper");

let operation = "";

const showOperation = (value) => {
  operation = operation + value;
  operationWrapper.innerText = operation;
};

const calcWrapper = document.querySelector(".calculator__wrapper");

calcWrapper.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.matches("button")) {
    checkButton(e.target.innerText);
  }
  console.log(operation);
});

const checkButton = (buttonType) => {
  switch (buttonType) {
    case "=":
      if (operation !== "") {
        calculate();
      }
      break;
    case "C":
      clear();
      break;
    case "CE":
      backspace();
      break;
    default:
      showOperation(buttonType);
      break;
  }
};

const calculate = () => {
  try {
    const result = eval(operation);

    operationWrapper.innerText = result;
  } catch {
    alert("Działanie niepoprawne, proszę poprawić");
  }
};

const clear = () => {
  operation = "";
  operationWrapper.innerText = operation;
};
const backspace = () => {
  operation = operation.slice(0, -1);
  operationWrapper.innerText = operation;
};

// IF STATEMENT
// const checkButton = (buttonType) => {
//   if (buttonType === "=") {
//     calculate();
//   } else if (buttonType === "C") {
//     clear();
//   } else if (buttonType === "CE") {
//     backspace();
//   } else {
//     showOperation(buttonType);
//   }
// };

// const text = "1 + 1 + (1 + 1) * 2 ";

// console.log(eval(text));

// 14:30

// EVAL DODAJE DZIAŁANIA W STRINGU
