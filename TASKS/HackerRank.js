function cutTheTree(data, edges) {
    //  So if we cut, we need to sum all that are connected, we will have 2 trees. (totalSum - tree1)-tree1 is the difference between them
    // The given edges -1 corresponds to the index in the number[]
    // We need to sum all the occurences in the array that are on the first one and sum their values
    let mapper = [];
    for (let i = 0; i < data.length + 1; i++) {
        mapper.push([]);
    }
    for (const [u, v] of edges) {
        mapper[u]?.push(v);
        mapper[v]?.push(u);
    }
    let totalSum = 0;
    for (const val of data) {
        totalSum += val;
    }
    const total = data.reduce((acc, number) => acc + number, 0);
    let minDifference = Infinity;
    function getSum(currentNode, parentNode) {
        // 1. Start with the current node's own value.
        // Remember your comment: node numbers are 1-based, but the `data` array is 0-based!
        let currentSum = data[currentNode - 1] ?? 0;
        // 2. Loop through all neighbors of the current node using `mapper[currentNode]`
        const currentNodeNeighbors = mapper[currentNode];
        if (currentNodeNeighbors != undefined) {
            for (const neighbor of currentNodeNeighbors) {
                if (neighbor !== parentNode) {
                    const tree1 = getSum(neighbor, currentNode);
                    currentSum += tree1;
                    const currentDifference = Math.abs(totalSum - 2 * tree1);
                    if (currentDifference < minDifference) {
                        minDifference = currentDifference;
                    }
                }
            }
        }
        // 3. Return the total sum for this sub-tree
        return currentSum;
    }
    getSum(1, 0);
    return minDifference;
}
console.log(cutTheTree([100, 200, 100, 500, 100, 600], [
    [1, 2],
    [2, 3],
    [2, 5],
    [4, 5],
    [5, 6],
]));
export {};
//# sourceMappingURL=HackerRank.js.map