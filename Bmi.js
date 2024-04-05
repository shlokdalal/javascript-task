// Data 1
// Mark's information
var markMass1 = 78; // in kg
var markHeight1 = 1.69; // in meters

// John's information
var johnMass1 = 92; // in kg
var johnHeight1 = 1.95; // in meters

// Data 2
// Mark's information
var markMass2 = 95; // in kg
var markHeight2 = 1.88; // in meters

// John's information
var johnMass2 = 85; // in kg
var johnHeight2 = 1.76; // in meters

// Calculating BMI
var markBMI1 = markMass1 / (markHeight1 * markHeight1);
var johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

var markBMI2 = markMass2 / (markHeight2 * markHeight2);
var johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// Checking if Mark has a higher BMI than John for both sets of data
var markHigherBMI1 = markBMI1 > johnBMI1;
var markHigherBMI2 = markBMI2 > johnBMI2;

// Output
console.log("Data 1:");
console.log("Mark's BMI: " + markBMI1.toFixed(2));
console.log("John's BMI: " + johnBMI1.toFixed(2));
console.log("Is Mark's BMI higher than John's? " + markHigherBMI1);

console.log("\nData 2:");
console.log("Mark's BMI: " + markBMI2.toFixed(2));
console.log("John's BMI: " + johnBMI2.toFixed(2));
console.log("Is Mark's BMI higher than John's? " + markHigherBMI2);
