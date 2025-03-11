function isPalindromeLoop(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Test cases
console.log(isPalindromeLoop("madam")); // true
console.log(isPalindromeLoop("hello")); // false
console.log(isPalindromeLoop("level")); // true
