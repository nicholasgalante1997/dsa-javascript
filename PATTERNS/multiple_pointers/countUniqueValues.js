/* 
Implement a function called countUniqueValues which accepts a sorted array
and counts the unique values in the array. There can be negative numbers in
the array, but it will always be sorted
return the number of unique values in the array.
params 
{Number[]}
return
{Number}
*/

function countUniqueValues(arr) {
  // SPACE CONSCIOUS APPROACH
  // if its an empty array return 0;
  if (arr.length === 0) return 0;
  // create a pointer for the first value and the next value
  let base = 0;
  let next = 1;
  while (next < arr.length) {
    // if base and next are equal, increment next
    // && compare base to the next index
    if (arr[base] === arr[next]) {
      next++;
      // if arr[base] != arr[next]
    } else {
      // increment base to the next index
      base = base + 1;
      // assign that index to the unique value (which is arr[next])
      arr[base] = arr[next];
      // increment next and move to the next comparison;
      next++;
    }
  }
  // when we're done checking the entire array (arr)
  // return wherever base is (because that signifies the last unique value)
  // because of 0 base in arrays, add 1 to base variable to adjust it to the correct value
  return base + 1;
}
