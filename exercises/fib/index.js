// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iterative solution, linear runtime 0(n)
// function fib(n) {
//   let numbers = [0, 1];

//   // this needs to start from i = 2  and needs to evaulate till i <= n since we need the previous two numbers to sum them out, i-1 and i-2
//   for (let i = 2; i <= n; i++) {
//     numbers.push(numbers[i - 1] + numbers[i - 2]);
//   }
//   return numbers[n];
// }

// recursive solution, this solution will recourse backwards from the nth number down to 1 and 0 and make the sum of all 1s
// this will run at an exponential runtime, so its a big red flag and needs optimization
// we can either use the iterative solution (which is linear runtime)
// or optimize this one with memoization/cache, which means everytime we call this function with already known results, they will be precalculated, saving time
function slowFib(n) {
  if (n < 2) return n; // this is the exit case, where it will only return 1 or 0 when it reaches the end of the recursion
  return fib(n - 1) + fib(n - 2); // otherwise it will just keep decomposing the number down and make the sums
}

// memoization process: it will take a function and cache its results for faster response. if it doesnt exist, it will call the
//  original function and store the results in the cache
function memoize(fn) {
  const cache = {};
  // we use the spread operator since we dont know the real arguments, as this is a generic memoization that can be reused
  return function (...args) {
    if (cache[args]) {
      // if this already exists in the cache,we return it
      return cache[args];
    }
    // otherwise we call the original function by using JS ".apply" method, in order to invoke it
    const result = fn.apply(this, args); // apply function takes "this" and the arguments
    cache[args] = result; // we save the result in the cache and return it
    return result;
  };
}
// this is how we call memoize
const fib = memoize(slowFib);

module.exports = fib;
