let display=document.getElementById('display');

function insertNumber(number){
    display.value += number;
}
function insertOperator(operator){
    display.value += operator;
}
function clearDisplay(){
    display.value="";
}
function deleten(){
    display.value=display.value.slice(0,-1);
}
function calculate(){
    try{
    display.value=eval(display.value);
    }
    catch(error){
        display.value='error';
    }

}