// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback){
    let flag = false;
    function helper(arr, callback) {
        if (arr.length === 0) {
            return
        }
        if (callback(arr[arr.length - 1])){
            flag = true;
        }
        helper(arr.splice(0, arr.length - 1), callback)
    }
    helper(arr, callback)
    return flag;
  }