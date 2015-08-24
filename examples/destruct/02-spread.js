var head, rest;
[head, ...rest] = [1, 2, 3, 4, 5];

console.log(head); /*1*/
console.log(rest); /*[2, 3, 4, 5]*/

var array1 = [1,2,3],
    array2 = [4,5,6];

/*ES5: array1.push.apply(array1, array2);*/
array1.push(...array2);

console.log(array1); //[1,2,3,4,5,6]