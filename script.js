let number = document.createElement('div')
number.classList.add('number-display')
number.style.textAlign = "right"
let numberButton = document.querySelectorAll('#number');
let operatorButton = document.querySelectorAll('#operator');
let clearAll = document.querySelector('.ac');

let firstNumber = 0;
let secondNumber = 0;
let sum = 0;
let operatorText = "";





clearAll.addEventListener('click', ()  =>{
    firstNumber = 0;
    secondNumber = 0;
    sum = 0;
    operatorText = "";
    displayNumber("");
})


numberButton.forEach(btn => {
    btn.addEventListener('click', (ev) =>{
        if (operatorText === ""){
            firstNumber = parseInt(firstNumber + btn.textContent);
            displayNumber(firstNumber);
        } else if (sum != ""){
            firstNumber = parseInt(sum);
            secondNumber = parseInt(secondNumber + btn.textContent);
            displayNumber(secondNumber);
        }
        else {
            secondNumber = parseInt(secondNumber + btn.textContent);
            displayNumber(secondNumber);
        }
        console.log(`first number ${firstNumber}  second number ${secondNumber} sum ${sum}`);

    });

})


operatorButton.forEach(btn => {
    btn.addEventListener('click', (ev) => {
    if (firstNumber != "" && secondNumber != ""){
        // operatorText = btn.textContent;
        sum = operate(operatorText, firstNumber, secondNumber);
        secondNumber = 0;
        displayNumber(sum);
        console.log(`1st textoperator ${operatorText} \n firstnumber ${firstNumber} \n secondNumber ${secondNumber} \n sum ${sum}`);
    } else if (btn.textContent != "="){
        operatorText = btn.textContent;
        secondNumber = 0;
        displayNumber(operatorText);
        console.log(`2nd textoperator ${operatorText} \n firstnumber ${firstNumber} \n secondNumber ${secondNumber} \n sum ${sum}`);
    }else {
        displayNumber('Oops')
        sum = operate(operatorText, firstNumber, secondNumber);
        console.log(sum);
        console.log(`3rd textoperator ${operatorText} \n firstnumber ${firstNumber} \n secondNumber ${secondNumber} \n sum ${sum}`);
    }




    })

})



function operate(operation, num1, num2){

    switch (operation){
        case "+":
            return add(num1,num2);
        case "−":
            return minus(num1,num2)
        case "×":
            return times(num1,num2)
        case "÷":
            return divide(num1,num2);
    }


}

function add(num1, num2){
    return Number(num1 + num2);
}

function minus(num1, num2){
    return Number(num1 - num2);
}

function times(num1, num2){
    return Number(num1 * num2);
}

function divide(num1, num2){
    return Number(num1 / num2).toFixed(2);
}

function displayNumber(num){
    let display = document.querySelector('.display');
    number.style.padding = "30px"
    number.textContent = num;
    display.append(number);
}



