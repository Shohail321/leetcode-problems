var lengthOfLongestSubstring = function(s) {
    const lastSeen = new Map(); // remembers last position of each character
    let left = 0;  // start of window
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        // if we saw this char before and it's inside the current window
        if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
            left = lastSeen.get(ch) + 1; // move left side
        }

        lastSeen.set(ch, right); // remember where we saw it
        maxLen = Math.max(maxLen, right - left + 1); // update max
    }

    return maxLen;
};
