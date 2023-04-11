const unSortedArr = [10,11,34,56,00,1,5]
function findMinValu(arr){
    return  arr.reduce(function(prev,curr){
    return prev < curr ? prev : curr
})
}
console.log(findMinValu(unSortedArr))