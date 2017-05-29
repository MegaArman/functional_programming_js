const arr1 = [1, 2, 3];
const arr2 = arr1.reduce((acc, val) =>
{
  val += 1;
  if (val % 2 === 0)
    return acc.concat(val + 1);
}, []);
console.log(arr2);
