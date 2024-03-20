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

// Function to calculate distance from headquarters in feet
function distanceFromHqInFeet(distance){
    if (distance > 42) {
  let feet=(distance- 42)*264
  return (feet)
    } else {
   let feet = (42 - distance)*264
   return (feet)
    }
}
console.log(distanceFromHqInFeet(34))
function distanceTravelledInFeet(start,destination){
    if (start<destination){
    return((destination-start)*264)
}else{
    return((start-destination)*264)
}
}
let feetDistance;
function calculatesFarePrice(start,destination){
    if (destination>start){
    feetDistance = (destination-start)*264
    }else{
   feetDistance = (start - destination)*264
    }
    if (feetDistance<=400){
       let fee = 0
        return fee
    } else if(feetDistance<=2000){
        let fee =(feetDistance-400)*0.02
        return fee
    } else if (feetDistance<2500){
        let fee =25
        return fee
    }else{
        return 'cannot travel that far'
    }
}
 