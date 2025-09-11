
function calculateBMI(mass, height) {
  return mass / (height ** 2);
}

function compareBMI(markMass, markHeight, johnMass, johnHeight) {
  let markBMI = calculateBMI(markMass, markHeight);
  let johnBMI = calculateBMI(johnMass, johnHeight);

  let markHigherBMI = markBMI > johnBMI;

  console.log("Mark's BMI:", markBMI);
  console.log("John's BMI:", johnBMI);
  console.log("Mark has higher BMI:", markHigherBMI);
}

console.log("Test Data 1:");
compareBMI(78, 1.69, 92, 1.95);

console.log("Test Data 2:");
compareBMI(95, 1.88, 85, 1.76);
