
class Car {

    num:number;

    constructor(_num:number) {
        this.num=_num;
    }

    show():void {
        console.log("car num="+this.num);
    }
    
}

class House {
    
    num:number;
    flats:number;

    constructor(_num:number,_flats:number) {
        this.num=_num;
        this.flats=_flats;
    }

    show():void {
        console.log("house num="+this.num+" flats="+this.flats);
    }
    
}
    
// у объекта класса House есть все свойства и методы, которые есть в классе Car
// а также "лишнее" свойство flats
// мы можем присвоить его переменной класса Car, преобразование типа не требуется
let car1:Car=new House(21,9*4);
car1.show(); // вызовется show класса House
// let house1:House=new Car(2870); // ошибка

console.log('car1 это Car?', car1 instanceof Car); // false
console.log('car1 это House?', car1 instanceof House); // true
// работа instanceof не имеет отношения к TS, 
// он работает уже в браузере, анализируя цепочку прототипов

// TS знает только типы и не знает реальных значений переменных
// JS (в браузере) знает только реальные значения переменных и не знает типов

let carObj={
    num:2870,
    speed:100,
    show: function():void {
        console.log("carObj num="+this.num);
    }
};

// у объекта carObj есть все свойства и методы, которые есть в классе Car
// а также "лишнее" свойство speed
// мы можем присвоить его объекту класса Car, преобразование типа не требуется
let car2:Car=carObj;
car2.show(); // вызовется show объекта carObj
console.log('car2 это Car?', car2 instanceof Car); // false
console.log('car2 это House?', car2 instanceof House); // false

// мы НЕ можем присвоить объекту класса Car объект класса,
// не имеющий всех свойств и методов класса Car,
// даже если применим явное преобразование типа
let trainObj={
    speed:100,
};
// let car3:Car=<Car>trainObj; // ошибка
