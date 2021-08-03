function binarySearch(array, target){
    let base = 0;
    let bound = array.length - 1;
    let med = Math.floor((bound + base) / 2);
    while (array[med] !== target) {
        if (base > bound){
            return -1;
        }
        if (target > array[med]){
            base = med + 1;
        }
        if (target < array[med]){
            bound = med - 1;
        }
        med = Math.floor((bound + base) / 2);
    }
    return med;
}