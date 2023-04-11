const arr1 = [12,14,12,16,19,20,19,12,15,20]

const arr2 = arr1.filter((ele,index,arr) => arr.indexOf(ele) !== index)
console.log(arr2)

const arr3 = arr1.filter((ele,index,arr) => arr.indexOf(ele) === index)
console.log(arr3)

const arr4 = [...new Set(arr1)]
console.log(arr4)