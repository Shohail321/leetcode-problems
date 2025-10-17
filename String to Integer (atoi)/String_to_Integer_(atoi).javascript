var myAtoi = function(s) {
    const INT_MAX = 2 ** 31 - 1; // 2147483647
    const INT_MIN = -(2 ** 31);  // -2147483648

    let i = 0;
    let n = s.length;
    let sign = 1;
    let result = 0;

    // Step 1: Skip leading whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // Step 2: Check for sign
    if (i < n && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Convert digits to integer
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        // Step 4: Check for overflow before adding the digit
        if (result > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};
