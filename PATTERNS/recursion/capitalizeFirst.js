function capitalizeFirst (strArr) {
    let retArr = [];
    function helper(arr) {
        if (arr.length === 0) {
            return;
        }
        const capital = arr[0].substring(0, 1).toUpperCase().concat(arr[0].slice(1));
        retArr.push(capital);
        helper(arr.slice(1));
    }
    helper(strArr);
    return retArr;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
