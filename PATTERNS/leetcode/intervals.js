/**
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], 
 * merge all overlapping intervals, and return an array of the 
 * non-overlapping intervals that cover all the intervals in the input.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    // if its an empty array return an empty array
    if (intervals.length === 0) return intervals;
        // an array to hold our return results
    let returnArray = [];
    // iterate through the array of intervals
    
    function helper(intervals2) {
         // if there is only one member in intervals, push that to result array - no overlap
        if (intervals2.length === 1) {
            returnArray.push(intervals2[0]);
            return;
        } 
        // if the leading value (intervals[0][1]) is greater than the next value's base
        // and less than the next value's lead
        if (intervals2[0][1] >= intervals2[1][0] && intervals2[0][1] <= intervals2[1][1]) {
            // we reassign that first interval element to encapsulate the new range
            // using base as interval[0][0], and lead as interval[1][1]
            intervals2[0] = [intervals2[0][0], intervals2[1][1]];
            // trim out the current 'next' (bad terminology) interval since its now redundant
            let holder = intervals2.slice(0, 1).concat(intervals2.slice(2));
            // recall helper function with one less index in intervals
            helper(holder)
        } else {
            // if theres no overlap, add the first element to our retArr
            returnArray.push(intervals2[0]);
            // slice off that first element
            let transfer = intervals2.slice(1);
            // wash rinse repeat
            helper(transfer)
        }
    }
    
    helper(intervals);
    return returnArray;
};

/* 
Input:
[[1,4],[0,1]]
Output:
[[1,4],[0,1]]
Expected:
[[0,4]]
*/