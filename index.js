"use strict";
function calculateCircleArea(radius) {
    const pi = 3.14159; // You can use a more accurate value of pi if needed
    const area = pi * radius ** 2;
    return area;
}
function main() {
    const radiusInput = prompt("Enter the radius of the circle:");
    if (radiusInput === null) {
        console.log("No input provided. Exiting...");
        return;
    }
    const radius = parseFloat(radiusInput);
    if (isNaN(radius)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    const area = calculateCircleArea(radius);
    console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
}
main();
