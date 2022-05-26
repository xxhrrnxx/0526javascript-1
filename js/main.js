// 問題①
const array = [2, 4, 7, 5, 4, 3, 8];
const filterResult = array.filter((value, index, arr) => {
  return (arr.indexOf(value) === index);
});

console.log(filterResult);
