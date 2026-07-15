const map = <T, U>(array: T[], predicate: (element: T) => U): U[] => {
  let result: U[] = [];
  for (let el of array) {
    result.push(predicate(el));
  }

  return result;
};

const numArr = [1, 2, 3, 4, 5];
const plusTen = map(numArr, (el) => el + 10);
console.log(plusTen);
