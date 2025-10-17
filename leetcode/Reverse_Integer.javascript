var reverse = function(x) {
    const INT_MAX = 2 ** 31 - 1; // 2147483647
    const INT_MIN = -(2 ** 31);  // -2147483648
    let res = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x !== 0) {
        let digit = x % 10;
        x = Math.floor(x / 10);

        // Check overflow before pushing digit
        if (res > Math.floor((INT_MAX - digit) / 10)) {
            return 0;
        }

        res = res * 10 + digit;
    }

    res *= sign;

    // Final check (redundant but safe)
    if (res < INT_MIN || res > INT_MAX) {
        return 0;
    }

    return res;
};