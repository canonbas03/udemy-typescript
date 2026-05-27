function isBalanced(s) {
    // If the bracket count is not even: auto fail
    // Add brackets into an array, until we find a right bracket (RB)
    // When we find a RB pop the last element and compare, if they
    // are equal continue, else break print NO.
    // If no elements are left and the array is empty return yes
    if (s.length % 2 != 0) {
        return "NO";
    }
    const bracketPairs = {
        '{': '}',
        '(': ')',
        '[': ']',
    };
    // We need LB in an array
    let leftBrackets = [];
    for (const bracket of s) {
        // We need a way to associate pairs (LB -> RB)
        if (bracket in bracketPairs) {
            leftBrackets.push(bracket);
        }
        else {
            // check if it is a RB
            const bracket1 = leftBrackets.pop();
            if (typeof bracket1 == "undefined") {
                return "NO";
            }
            if (bracketPairs[bracket1] != bracket) {
                return "NO";
            }
        }
    }
    if (leftBrackets.length !== 0) {
        return "NO";
    }
    return "YES";
}
export {};
//# sourceMappingURL=hacker.js.map