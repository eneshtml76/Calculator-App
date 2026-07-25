const screen = document.getElementById("screen");

function append(value) {
    if (screen.textContent === "0" || screen.textContent === "Hata") {
        screen.textContent = value;
    } else {
        screen.textContent += value;
    }
}

function clearScreen() {
    screen.textContent = "0";
}

function backspace() {
    if (screen.textContent.length <= 1 || screen.textContent === "Hata") {
        screen.textContent = "0";
    } else {
        screen.textContent = screen.textContent.slice(0, -1);
    }
}

function calculate() {
    try {
        let expression = screen.textContent
            .replace(/×/g, "*")
            .replace(/÷/g, "/");

        let result = eval(expression);

        screen.textContent = result;
    } catch (error) {
        screen.textContent = "Hata";
    }
}