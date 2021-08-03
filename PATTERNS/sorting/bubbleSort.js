function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--){
        for (let j = 0; j < i; j++){
            if (array[j] > array[j + 1]){
                swap(array, j, j+1);
            }
        }
    }
    return array;
}

function swap(arr, ind1, ind2) {
    const temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

console.log(bubbleSort([9, 128, 7, 4, 134, 76]));
console.log(bubbleSort([77, 32, 200, 43, 44]));