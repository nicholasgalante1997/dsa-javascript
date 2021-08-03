/*
implement a function that accepts a variable number of arguments 
and checks whether there are any duplicates among the arguments passed in
You can solve this using FrequencyCounter OR Multiple Pointers pattern
*/ 

function areThereDuplicates(...args) {
  const freqCounter = {};
  for (let x = 0; x < args.length; x++) {
    const current = args[x];
    if (freqCounter[current]) {
        return true;
    } else {
        freqCounter[current] = true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 2, 1));
console.log(areThereDuplicates('s', 'd', 't'));