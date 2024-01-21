
// типизация аргументов и возвращаемого значения классических функций

function kvadrat(v:number):number {
    return v*v;
}

function myAlert(txt:string):void {
    alert(txt);
}

// типизация переменной-ссылки на классическую функцию

const kvadratRef:(v:number)=>number = kvadrat;
const myAlertRef:(txt:string)=>void = myAlert;

// типизация аргументов и возвращаемого значения стрелочных функций

const kvadrat2 = (v:number):number => {
    return v*v;
}

const myAlert2 = (txt:string):void => {
    alert(txt);
}
