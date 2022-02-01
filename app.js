

let calcuation = [];
let valGet = (val) =>{

    calcuation.push(val);
    document.querySelector('.display1').innerHTML = calcuation.join('');
    document.querySelector('.display2').innerHTML = 0;
}

let total = () =>{
    let total_cal = calcuation.join('');
    document.querySelector('.display2').innerHTML = eval(total_cal).toFixed(12);
}

let allClear = () =>{
    calcuation = [];
    document.querySelector('.display1').innerHTML = 0;
    document.querySelector('.display2').innerHTML = '';
}
let back = () =>{
    
    calcuation.pop();
    document.querySelector('.display1').innerHTML = calcuation.join('');
    document.querySelector('.display2').innerHTML = 0;
    
    
}


let on = () =>{
    calcuation = [];
    document.querySelector('.display1').innerHTML = 0;
    document.querySelector('.display2').innerHTML = '';
}

let off = () =>{
    calcuation = [];
    document.querySelector('.display1').innerHTML = '';
    document.querySelector('.display2').innerHTML = '';
}