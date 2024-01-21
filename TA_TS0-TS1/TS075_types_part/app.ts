const friend:{fam:string,im:string,otch:string,age:number}
    ={fam:"Иванов",im:"Иван",otch:"Иванович",age:25};

console.log(friend);

let fam2:typeof friend.fam;
fam2="Петров";

const data:Array<Number>=[5,7,9];

let item1:typeof data[1];
item1=77;
