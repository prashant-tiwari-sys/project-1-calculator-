const display = document.getElementById("result");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.innerText === "C") {
            display.value = "";
        } else if (button.innerText === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += button.innerText;
        }
    });
});