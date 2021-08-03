function selectionSort(array){
    for (let x = 0; x < array.length - 1; x++){
        let minimumIndex = x;
        for (let y = x + 1; y < array.length; y++){
            if (array[y] < array[minimumIndex]){
                minimumIndex = y;
            }
        }
        if (minimumIndex !== x){
            swap(array, x, minimumIndex);
        }
    }
    return array;
}

function swap(arr, ind1, ind2) {
    const temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

console.log(selectionSort([9, 128, 7, 4, 134, 76]));
console.log(selectionSort([77, 32, 200, 43, 44]));
