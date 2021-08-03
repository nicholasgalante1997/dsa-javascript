/* 
takes in two strings and checks whether the chars in the first string
form a subsequence of the chars in the second string
it should check whether the characters in the first string appear 
somewhere in the second string WITHOUT CHANGING THEIR ORDER

params
{String, String}
returns 
{Boolean}
*/

function isSubsequence(str1, str2) {
    // pointer for the first string;
    let x = 0;
    // pointer for the second string
    let y = 0;
    // if string one is an empty string, just return true
    if (!str1) return true;
    // move pointer for string two along every char in str2
    while (y < str2.length) {
      // if the characters in str1 and str2 are the same at this point
      // increment the pointer for the current char in str1
      if (str2[y] === str1[x]) x++;
      // if we were at the last char in str1 already, return true
      if (x === str1.length) return true;
      // move the pointer up one space in str2
      y++;
    }
    return false;
  }