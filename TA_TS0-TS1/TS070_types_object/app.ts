let friend:{fam:string,im:string,otch:string,age:number}
    ={fam:"Иванов",im:"Иван",otch:"Иванович",age:25};

console.log(friend);

friend.fam="Петров";
//friend.fam2="Сидоров"; // ошибка
// friend.fam=222;

{
    const key="fam";
    //const key=confirm("sdfgfgsfgsdfg")?"fam":"im";
    friend[key]="Петров";
}

{
    let friendKey:keyof {fam:string,im:string,otch:string,age:number};
    friendKey="fam";
    //friendKey="fam2"; // ошибка
}

{
    console.log(typeof friend);

    let friendKey:keyof typeof friend;
    friendKey="fam";
    //friendKey="fam2"; // ошибка
    //friendKey="age";
    friend[friendKey]="sss";
    //friend[friendKey]=5; // ошибка
}

// а если мы хотим старый добрый объект с произвольными парами ключ-значение:

let father:Record<string,any>={}; // т.е. ключом будет строка, значением - что угодно
father.fio="Сидоров Сидор Сидорович";
