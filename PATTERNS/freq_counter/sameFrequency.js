/* 
Given two positive integers, find out if the two numbers 
have the same frequency of digits

example: sameFrequency(182, 281) => true
sameFrequency(32, 14) => false

params
{Number, Number}

return
{Boolean}
*/

function sameFrequency(num1, num2) {
  // convert the numbers to strings so we can loop through easier
  const str1 = num1.toString(10);
  const str2 = num2.toString(10);
  // if they are not the same length, they cant have the same frequency
  if (str1.length !== str2.length) return false;

  // frequency counters
  const obj1 = {};
  const obj2 = {};
  for (let int of str1) {
    obj1[int] = obj1[int] ? obj1[int] + 1 : 1;
  }
  for (let int of str2) {
    obj2[int] = obj2[int] ? obj2[int] + 1 : 1;
  }
  for (let int of Object.keys(obj1)) {
    if (obj1[int] !== obj2[int]) {
      return false;
    }
  }
  return true;
}
