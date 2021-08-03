function minSubArrayLen(nums, sum) {
    // starting with a window of exactly one space
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
      // move the window to right
      if(total < sum && end < nums.length){
        // total is equal to the current index 0, then we increment and increase the size of the window by incrementing end
        total += nums[end];
          end++;
      }
      // if current window adds up to at least the sum given then
      // we can shrink the window 
      else if(total >= sum){
       // compare infinity to the difference in end - start (i.e. the length of the subarray)
        minLen = Math.min(minLen, end-start);
          // subtract the start of the window from the window
          total -= nums[start];
          // increment start that decrements the window by one and potentially lowers total
          start++;
      } 
      // current total less than required total but we reach the end of nums, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }