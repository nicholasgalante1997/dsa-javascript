/* 
Given a sorted array of integers and a target average 
determin if there is a pair of values in the array
where the average of the pair is the target.
There may be more than one pair that matches the target.

params
{Number[], Number}
returns
{Boolean}
*/

function averagePair(arr, target){
    let base = 0;
    let bound = arr.length - 1;
    while (base < bound) {
        let average = (arr[base] + arr[bound]) / 2
        if (average === target) {
            return true;
        }
        if (average > target) {
            bound--;
            continue;
        }
        base++;
    }
    return false;
  }