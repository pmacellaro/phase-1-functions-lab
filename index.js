// Code your solution in this file!
function distanceFromHqInBlocks (Pickup) {
    const hqLocation = 42;
    return Math.abs(Pickup - hqLocation);
}
function distanceFromHqInFeet (Pickup){
distanceFromHqInBlocks(Pickup);
let feet = distanceFromHqInBlocks(Pickup)*264;
return feet
}
function distanceTravelledInFeet(start, distance) {
let distanceInBlocks = Math.abs(start - distance);
let distanceInFeet = (distanceInBlocks*264);
return distanceInFeet;
}
function calculatesFarePrice(start,distance) {
let distanceInBlocks = Math.abs(start - distance);
let distanceInFeet = (distanceInBlocks*264);
    if (distanceInFeet <400) return 0;
    else if (distanceInFeet >400 && distanceInFeet<=2000) 
    return Math.abs(0.02*(distanceInFeet-400));
    else if (distanceInFeet >2000 && distanceInFeet <=2500) return 25;
    else if (distanceInFeet >2500) return `cannot travel that far`
}