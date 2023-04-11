const unSortedArr = [12,14,56,87,90,31,8]

const sortedArr = unSortedArr.sort((a,b) => {
    return a-b;
})
console.log(sortedArr)