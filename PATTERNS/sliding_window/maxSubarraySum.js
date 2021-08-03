function maxSubarraySum(arr, length){
    if (arr.length < length) return null;
    // get the sum of the first subset of the array
   let highestSum = 0;
   for (let x = 0; x < length; x++) {
       highestSum += arr[x];
   }
   // set the currentTotal to the highest sum (its the only sum so far)
   let currentTotal = highestSum;
   for (let y = length; y < arr.length; y++) {
       // remove the old value (beginning of subset)
       currentTotal = currentTotal - arr[y - length];
       // add in the new value (end of subset)
       currentTotal = currentTotal + arr[y];
       // compare the highest value so far to the current value
       if (currentTotal > highestSum) {
           highestSum = currentTotal;
       }
   }
   return highestSum;
 }