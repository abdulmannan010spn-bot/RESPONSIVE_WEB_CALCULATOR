const input = document.querySelector("input");
const btns = document.querySelectorAll("button");

let currentValue = " ";

btns.forEach((button) => {
  button.addEventListener("click", () => {
    const val = button.textContent.trim();

    if (val === "AC") {
      currentValue = "";
      input.value = "";
    } else if (val === "DE") {
      currentValue = currentValue.slice(0, -1);
      input.value = currentValue;
    } else if (val === "=") {
      try {
        let expression = currentValue.replace(/%/g, "/100");
        let result = eval(expression);

        result = parseFloat(result.toFixed(10));
        input.value = result;
        currentValue = String(result);
      } catch {
        input.value = "Error";
        currentValue = "";
      }
    } else {
      const operators = ["+", "-", "*", "/", "%"];
      const lastchar = currentValue.slice(-1);

      if (operators.includes(val) && operators.includes(lastchar)) {
        currentValue = currentValue.slice(0, -1) + val;
      } else {
        currentValue += val;
      }

      input.value = currentValue;
    }
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  const validKeys = "0123456789+-*/.%";
  if (validKeys.includes(key)) {
    currentValue += key;
    input.value = currentValue;
  } else if (key === "Enter") {
    document.querySelector(".equal").click(); // trigger "="
  } else if (key === "Backspace") {
    currentValue = currentValue.slice(0, -1);
    input.value = currentValue;
  } else if (key === "Escape") {
    currentValue = "";
    input.value = "";
  }
});
