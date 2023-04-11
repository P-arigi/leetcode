const months = ['May','Feb','Feb','April','June','May','Feb','July','October']

const countOfDuplicates = months.reduce((obj,month) =>{
    if(obj[month] === undefined){
        obj[month] =1;
        return obj;
    }
    else{
        obj[month]++;
        return obj;
    }
}, {});
console.log(countOfDuplicates);

//OR

const myArray = ['a','b','c','c','b','d']

var elementCounts = myArray.reduce((count,item) =>(count[item] = count[item] + 1 || 1, count), {});
console.log(elementCounts)