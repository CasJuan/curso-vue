

export const numberArray = [1,2,3,4,5];

numberArray.push(6);

//(number|string)[] = lo que hace esta liena es dejamre agregar dos tipos dentro de un array
const numberArray2:(number|string)[] = [...numberArray];
numberArray2.push(7);


console.log({numberArray});
console.log({numberArray2});


