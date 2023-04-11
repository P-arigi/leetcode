const ids = [10,20,30,40,50,60]

const totalCount = ids.reduce((a,b) => a+b,0);
console.log(totalCount)

const lengthIds = ids.length;
console.log(totalCount/lengthIds)