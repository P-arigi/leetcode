const unSortedArr = [10,11,34,53,11,10,53,11]
const sortedArr = unSortedArr.filter((ele,index,arr) => arr.indexOf(ele) == index) 
console.log(sortedArr)