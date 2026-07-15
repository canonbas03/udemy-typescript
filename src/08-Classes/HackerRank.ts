function pairs(k: number, arr: number[]): number {
  let result = 0;
  for (const el of arr) {
    if (arr.includes(el + k)) {
      result++;
    }
  }

  return result;
}

console.log(pairs(2, [1, 5, 3, 4, 2]));
