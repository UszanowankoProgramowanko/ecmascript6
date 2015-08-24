'use strict';

let foo = 'bar';
if (true) {
  console.log(foo); /* ReferenceError (due to Temporal Dead Zone)*/
  let foo = 'bar';
}