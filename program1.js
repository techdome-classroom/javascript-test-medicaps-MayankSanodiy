function longestSubstring(s) {
    // Implementation of longestSubstring function
    let left = 0;
    let right = 0;
    let charPositions = {};
    let maxLength = 0;

    while (right < s.length) {
        let currentChar = s[right];

        if (charPositions.hasOwnProperty(currentChar) && charPositions[currentChar] >= left) {
            left = charPositions[currentChar] + 1;
        }

        
        charPositions[currentChar] = right;
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
     
    
}

module.exports = { longestSubstring };

