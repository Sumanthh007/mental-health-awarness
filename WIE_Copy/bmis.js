function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / (height * height);
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    } else {
        alert("Please enter valid weight and height values.");
    }
}
