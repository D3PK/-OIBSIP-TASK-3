document.getElementById('convertBtn').addEventListener('click', () => {
    const temperatureInput = document.getElementById('temperature').value;
    const fromUnitInput = document.getElementById('fromUnit').value;
    const toUnitInput = document.getElementById('toUnit').value;
    const convertedTemperature = convertTemperature(Number(temperatureInput), fromUnitInput, toUnitInput);
    displayResult(convertedTemperature);
});

function convertTemperature(temperature, fromUnit, toUnit) {
    if (fromUnit === toUnit) {
    return temperature; 
    }

    switch (fromUnit) {
    case 'celsius':
        return convertFromCelsius(temperature, toUnit);
    case 'fahrenheit':
        return convertFromFahrenheit(temperature, toUnit);
    case 'kelvin':
        return convertFromKelvin(temperature, toUnit);
    default:
        return null;
    }
}

function convertFromCelsius(temperature, toUnit) {
    switch (toUnit) {
    case 'fahrenheit':
        return (temperature * 9/5) + 32;
    case 'kelvin':
        return temperature + 273.15;
    default:
        return null;
    }
}

function convertFromFahrenheit(temperature, toUnit) {
    switch (toUnit) {
    case 'celsius':
        return (temperature - 32) * 5/9;
    case 'kelvin':
        return (temperature - 32) * 5/9 + 273.15;
    default:
        return null;
    }
}

function convertFromKelvin(temperature, toUnit) {
    switch (toUnit) {
    case 'celsius':
        return temperature - 273.15;
    case 'fahrenheit':
        return (temperature - 273.15) * 9/5 + 32;
    default:
        return null;
    }
}

function displayResult(convertedTemperature) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Converted Temperature: ${convertedTemperature.toFixed(2)}</p>`;
    resultDiv.style.display = 'block';
}
