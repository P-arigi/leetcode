const numberArr = [5,45,54,90,8,100,35]
function findMaxvalue(arr){
    return arr.reduce(function(prev,curr){
        return prev > curr ? prev : curr;
    })
}
console.log(findMaxvalue(numberArr))