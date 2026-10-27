
document.getElementById("convertBtn").addEventListener("click", function () {
    const input = document.getElementById("temperature").value;
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;
    const result = document.getElementById("result");

    if (input.trim() === "") {
        result.textContent = "Please enter a temperature!";
        return;
    }

    const temp = Number(input);

    if (!Number.isFinite(temp)) {
        result.textContent = "Enter a valid number.";
        return;
    }

    let celsius;

    if (from === "C") {
        celsius = temp;
    } else if (from === "F") {
        celsius = (temp - 32) * 5 / 9;
    } else {
        celsius = temp - 273.15;
    }

    if (celsius < -273.15) {
        result.textContent = "Temperature cannot be below absolute zero!";
        return;
    }

    let converted;

    if (to === "C") {
        converted = celsius;
    } else if (to === "F") {
        converted = celsius * 9 / 5 + 32;
    } else {
        converted = celsius + 273.15;
    }

    const symbols = {
        C: "°C",
        F: "°F",
        K: "K"
    };

    result.textContent = converted.toFixed(2) + " " + symbols[to];
});
