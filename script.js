function operate(operation, num1, num2){

}

function add(num1, num2){
    return Number(num1 + num2);
}

function minus(num1, num2){
    return num1 - num2;
}

function times(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function displayNumber(){
    let number = document.createElement('div')
    const display = document.querySelector('.display');
    number.textContent = add(1,2);
    display.appendChild(number);

}

displayNumber();