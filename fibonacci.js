function fibonacci(n) {
    let fib = [0, 1]; // First two numbers in the sequence
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// Print first 10 Fibonacci numbers
console.log(fibonacci(10)); 
