/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {

    // tracker for the count of units on the truck
    let unitCount = 0;
    // need a threshold to track when we can't fit any more boxes
    let threshold = truckSize;
    // sort the boxTypes by highest number of units
    const sorted = boxTypes.sort((a, b) => a[1] - b[1]);
    // iterate through the boxes starting at the end 
    for (let x = sorted.length - 1; threshold > 0 && x >= 0; x--){
        // if the current number of boxes we're up to is more than we can fit on the truck
        // then we only accept (threshold * units per that box) and add that to the unitcount
        // then return unitcount;
        if (threshold - sorted[x][0] < 0){
            const unitsToAdd = threshold * sorted[x][1];
            unitCount += unitsToAdd;
            return unitCount;
        }
        // if the threshold - the number of boxes of this unit is positive, we can fit more boxes
        // accept the total number of that box
        if (threshold - sorted[x][0] > 0) {
            unitCount += (sorted[x][1] * sorted[x][0]);
            threshold -= sorted[x][0];
            continue;
        }
        if (threshold - sorted[x][0] === 0){
            unitCount += (sorted[x][1] * sorted[x][0]);
            return unitCount;
        }
        
    }
    return unitCount;
};

maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10);
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));