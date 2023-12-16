// code your solution here
function distanceFromHqInBlocks(blocks){
    let disInBlocks=blocks-42;

    if (disInBlocks<0){
        return 42 -blocks
    }
    return disInBlocks
}

function distanceFromHqInFeet(blocks){
    let disInBlocks=distanceFromHqInBlocks (blocks)
    if (disInBlocks<0){
        disInBlocks=42 -blocks
    }
    return disInBlocks * 264
}


function distanceTravelledInFeet(start, destination){
    let travelDistance=destination-start;
    if (travelDistance<0){
        travelDistance = start-destination
    }
    return travelDistance * 264

    

}

function calculatesFarePrice(start, destination) {
    let totalDistanceTravelled = distanceTravelledInFeet(start,destination);
    if (totalDistanceTravelled<=400){
        return 0
    }else if(totalDistanceTravelled>400&&totalDistanceTravelled<2000){

        return (totalDistanceTravelled-400)*0.02
    }else if(totalDistanceTravelled>2000&&totalDistanceTravelled<2500){
        return 25

    }else{
        return "cannot travel that far"
    }
    


}
