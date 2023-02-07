// 57a429e253ba3381850000fb
// 07.02.2023


function bmi(weight, height) {
    const bmi = weight / Math.pow(height, 2)
    if(bmi <= 18.5) return "Underweight"
    if(bmi <= 25.0) return "Normal"
    if(bmi <= 30.0) return "Overweight"
    if(bmi > 30) return "Obese"
}

console.log(bmi(80, 1.80))