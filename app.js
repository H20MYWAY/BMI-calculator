window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi);
};

function calculateBmi() {
    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const result = document.querySelector('#result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerText = "Please provide valid height and weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else if (bmi < 34.9) {
        category = "Obesity (Class I)";
    } else if (bmi < 39.9) {
        category = "Obesity (Class II)";
    } else {
        category = "Extreme Obesity";
    }

    result.innerText = `${category}: ${bmi}`;
}
