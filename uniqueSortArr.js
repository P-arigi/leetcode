const unSortedArr = [10,12,43,11,45,45,80]

const sortedArr = unSortedArr.filter((ele,index,arr) => arr.indexOf(ele) == index)
console.log(sortedArr)

const sortedArr1 = sortedArr.sort((a,b) => {
 return a-b;
}) 
console.log(sortedArr1)