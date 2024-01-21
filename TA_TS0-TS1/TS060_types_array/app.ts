
let a1:number[]=[5,7];
console.log(a1);

let a2:Array<number>=[5,7];
console.log(a2);
a2[1]=77;

let a3:ReadonlyArray<number>=[5,7];
console.log(a3);
// a3[1]=77;  // ошибка
