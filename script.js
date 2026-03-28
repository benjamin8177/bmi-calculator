window.calculateBMI = function() {
    const heightInput = document.getElementById("height").value;
    const weightInput = document.getElementById("weight").value;
    const resultDiv = document.getElementById("result");
    
    // Validate inputs
    if (heightInput === "" || heightInput <= 0 || weightInput === "" || weightInput <= 0) {
        resultDiv.innerHTML = "Iltimos amaldagi bo'y va vaznni kiriting!";
        resultDiv.className = "result overweight"; // default qizil
        resultDiv.style.display = "block";
        return;
    }
    
    // BMI formula: kg / m^2
    const mHeight = (heightInput / 100);
    const bmi = (weightInput / (mHeight * mHeight)).toFixed(1);
    
    let category = "";
    let className = "";
    
    if (bmi < 18.5) {
        category = "Vazn yetishmasligi";
        className = "underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal vazn";
        className = "normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Ortiqcha vazn";
        className = "overweight";
    } else {
        category = "Semizlik";
        className = "overweight";
    }
    
    resultDiv.innerHTML = `Sizning BMI: ${bmi} <span>Sizda: ${category}</span>`;
    resultDiv.className = `result ${className}`;
}
