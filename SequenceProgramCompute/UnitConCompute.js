let feet = 12; // 12 inches means 1 feet
let inch = 42;

let inchToFeet = inch / feet;
console.log("Unit Conversion of 42 inches is " + inchToFeet);

let length = 60;
let width = 40;
let oneFeetToMeters = 0.3048;

console.log("Plot Length " + length + " Feet");
console.log("Plot width " + width + " Feet");

let areaOfPlot = length * width;
let areaInMeters = areaOfPlot * oneFeetToMeters;
console.log("Rectangular Plot Length " + length + " Feet * width " + width + " Feet in Meters = "+areaInMeters+ " Meters " );


plotInSqMtrs = 25;
oneSqMtrsToAcres = 0.00024710538146717;
let areaOfPlotInAcrs = plotInSqMtrs * oneSqMtrsToAcres;
console.log("Area of 25 sq meters in acres is :- "+areaOfPlotInAcrs);