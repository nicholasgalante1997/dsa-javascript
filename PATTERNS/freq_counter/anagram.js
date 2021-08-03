/* 
Given two strings, write a function to determine if the second string is an anagram of the first. 
You may assume that the string contains only lowercase alphabets, no spaces

params 
{String str1}
{String str2}
returns 
{Boolean}
*/

function validAnagram(str1, str2) {
  // if the strings arent the same length, return false not an anagram
  if (str1.length !== str2.length) {
    return false;
  }
  // create frequency counters to track str1 and str2
  const freqCounter1 = {};
  const freqCounter2 = {};
  // add contents of str1 to map
  for (let char of str1) {
    if (freqCounter1[char]) {
      freqCounter1[char] = freqCounter1[char] + 1;
    } else {
      freqCounter1[char] = 1;
    }
  }
  // add contents of str2 to map
  for (let char of str2) {
    if (freqCounter2[char]) {
      freqCounter2[char] = freqCounter2[char] + 1;
    } else {
      freqCounter2[char] = 1;
    }
  }
  // check if the values are the same in both maps for relevant keys
  for (let key of Object.keys(freqCounter1)) {
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }
  return true;
}
