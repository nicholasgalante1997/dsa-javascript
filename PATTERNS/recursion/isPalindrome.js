// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    let flag = true;
    function helper(str) {
        if (str.length <= 1) {
            return;
        }
        if (str.charAt(0) !== str.charAt(str.length - 1)){
            flag = false;
        }
        helper(str.substring(1, str.length - 1));
    }
    helper(str);
    return flag;
  }