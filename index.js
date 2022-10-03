// A function that returns the nth-rarest item.

const nth_most_rate = (list, n) => {
  let groupedArray = [];
  for (let i = 0; i < list.length; i++) {
    const isNum = groupedArray.findIndex((item) => item.v == list[i]);
    if (isNum !== -1) {
      groupedArray[isNum].qty += 1;
    } else {
      groupedArray.push({ v: list[i], qty: 1 });
    }
  }
  groupedArray.sort((a, b) => a.qty - b.qty);
  return groupedArray[n - 1].v;
};

console.log(nth_most_rate([5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5], 2));
