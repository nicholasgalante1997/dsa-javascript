// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

console.log(power(2, 4));

/* 
how this works
1. we call power(2, 4)
            2. return 2 * power(2, 3)
                        3. return 2 * power(2, 2)
                                    4. return 2 * power(2, 1)
                                            5. return 1;

So as it goes back up the callstack, its 
1. return 2 * 8
    2. return 2 * 4
                3. return 2 * 2
                            4. return 2 * 1
                                    5. return 1;
*/