let inputElem = document.querySelector('input')
let numberButton = document.querySelectorAll('.numberButton')
let cleanInput = document.querySelector('.clean')
let equal = document.querySelector('.equal')
let specialCalc = document.querySelectorAll('.specialCalc button')

numberButton.forEach(function(numbers){
    numbers.addEventListener('click',function(event){
        inputElem.value += event.target.value
    })
})

let powerFlag=false;
let powerValue;
specialCalc.forEach(function(button){
    button.addEventListener('click',function(event){
            if(event.target.value==="^"){
                powerFlag=true;
                inputElem.value+=event.target.value
                powerValue="pow"
            }else{
                inputElem.value = Math[event.target.value](inputElem.value);
            }
    })
})

function numbersEqual(){
    if(powerFlag){
        let powerArray = inputElem.value.split("^")
        inputElem.value = Math[powerValue](powerArray[0],powerArray[1])
        powerFlag=false
    }
    inputElem.value=eval(inputElem.value)
    
}
equal.addEventListener('click',numbersEqual)

function resetInput(){
    inputElem.value=''
}
cleanInput.addEventListener('click',resetInput)