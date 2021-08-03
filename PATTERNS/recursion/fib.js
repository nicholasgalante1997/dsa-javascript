// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

/*

fib(4)
    => return fib(3) + fib(2)
        => return fib(2) + fib(1)
if fib(<=2) === return 1 then we know fib(2) || fib(1) is === 1;
so the resulting equation becomes 
  fib(4)
    return fib(3) + 1
    (where fib(3) === return 1 + 1) bc fib(3) === return (fib(2) + fib(1))
    Both of which are equal to 1;
*/  