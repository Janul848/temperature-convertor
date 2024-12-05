function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelect = document.getElementById("unitSelect").value;
    const resultElement = document.getElementById("result");

    let result;

    if (unitSelect === "C") {
        // Convert Celsius to Fahrenheit and Kelvin
        const fahrenheit = (temperatureInput * 9/5) + 32;
        const kelvin = temperatureInput + 273.15;
        resultElement.textContent = `${temperatureInput}°C= ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)} K`;
    } else if (unitSelect === "F") {
        // Convert Fahrenheit to Celsius and Kelvin
        const celsius = (temperatureInput - 32) * 5/9;
        const kelvin = celsius + 273.15;
        resultElement.textContent = `${temperatureInput}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)} K`;
    } else if (unitSelect === "K") {
        // Convert Kelvin to Celsius and Fahrenheit
        const celsius = temperatureInput - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = `${temperatureInput} K= ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultElement.textContent = "Please enter a valid temperature.";
    }
}