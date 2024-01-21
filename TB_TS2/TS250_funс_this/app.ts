// автотипизация car1

let car1={

    num: '2870-ОГО',
    model: 'Волга',
    
    show: function(prefix:string) {
        console.log(prefix+" "+this.num+" "+this.model);
        // обращаемся к несуществующему свойству price - ошибки нет, т.к. this:any
        console.log(prefix+" "+this.price); 
    }

};
car1.show("INFO #1:");

// явная типизация car2

type Car={
    num:string,
    model:string,
    show:(s:string)=>void
};

let car2:Car={
    
    num: '2870-ОГО',
    model: 'Волга',
    
    show: function(prefix:string):void {
        console.log(prefix+" "+this.num+" "+this.model);
        // обращаемся к несуществующему свойству price - ошибки нет, т.к. this:any
        console.log(prefix+" "+this.price); 
    }

};
car2.show("INFO #2:");

// автотипизация car3, с явной типизацией сработает тоже

let car3={
    
    num: '2870-ОГО',
    model: 'Волга',
    
    show: function(this:Car,prefix:string):void {
        console.log(prefix+" "+this.num+" "+this.model);
        // теперь к price обратиться нельзя - TS знает что this:Car
        //console.log(prefix+" "+this.price); // ошибка
    }

};
car3.show("INFO #3:");

const showRef=car3.show;
//showRef("INFO #3:"); // ошибка
showRef.call(car3,"INFO #3:");
// showRef.call({},"INFO #3:"); // должна быть ошибка, но нет
