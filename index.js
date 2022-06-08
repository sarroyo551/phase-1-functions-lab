// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    if (pickUpLocation > 42) {
       return pickUpLocation - 42; 
    } else {
       return 42 - pickUpLocation;
    }
}

function distanceFromHqInFeet (pickUpBlock) {  
    return distanceFromHqInBlocks(pickUpBlock)* 264;
}

function distanceTravelledInFeet (startBlock, endBlock) {
    if (startBlock > endBlock) {
        return (startBlock - endBlock) * 264;
    } else {
        return (endBlock - startBlock) * 264;
    }
}

function calculatesFarePrice(start, end) {
   // return distanceTravelledInFeet 
   const distance = distanceTravelledInFeet(start, end)
   
   if (distance <= 400) {
       return 0;
   } else if (distance > 400 && distance <= 2000){
       return .02 * (distance - 400) ;
   } else if (distance > 2000 && distance < 2500) {
       return 25;
   } else {
       return 'cannot travel that far';
   }
}