// Define the distance variable
let distance;

// Function to calculate distance from headquarters in blocks
function distanceFromHqInBlocks(pickup) {
    if (pickup > 42) {
        return pickup - 42;
    } else {
        return 42 - pickup;
    }
}
dis
// Function to calculate distance from headquarters in feet
function distanceFromHqInFeet(distanceInBlocks) {
    let feet = distanceInBlocks * 264;
    console.log(feet);
    return feet;
}
let pickup =50
// Assign a value to pickup

distanceInBlocks = distanceFromHqInFeet(distanceFromHqInBlocks(pickup))
console.log(distanceFromHqInFeet)

function distanceFromHqInFeet(distanceInBlocks) {
    let feet = distanceInBlocks * 264;
    console.log(feet);
    return feet;
}
let pickup =50
// Assign a value to pickup
let distanceInBlocks = distanceFromHqInBlocks(pickup)
let feet = distanceFromHqInFeet(distanceInBlocks)
console.log(feet)