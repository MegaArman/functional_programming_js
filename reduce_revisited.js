const arr1 = [1, 2, 3, 4];
const getDoubledEvens = () => arr1.reduce(
  (acc, val) => (val % 2 === 0) ? acc.concat(val * 2): acc
   ,[]);
console.log(getDoubledEvens(arr1));
