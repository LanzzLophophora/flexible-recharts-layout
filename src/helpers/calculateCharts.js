export function calculateCharts(arr, n, line) {
  let newN = n;
  if (line) {
    if (arr.length === 4) {
      newN = 2;
    }
  }

  const numberOfSmallArrays =
    arr.length % newN === 0 ? Math.floor(arr.length / newN) : Math.floor(arr.length / newN) + 1;
  const newArr = [];

  for (let i = 0; i < numberOfSmallArrays; i++) {
    newArr.push([]);
  }

  arr.forEach((val, index) => {
    const newArrayIndex = Math.floor(index / newN);
    newArr[newArrayIndex].push(val);
  });

  return newArr;
}
