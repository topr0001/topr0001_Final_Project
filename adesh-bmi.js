function calculateBMI(weight, height) {
  return weight / (height * height);
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal Weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

const weight = 90;
const height = 1.91;

const bmi = calculateBMI(weight, height);
const category = interpretBMI(bmi);

console.log("BMI:", bmi);
console.log("Category:", category);
