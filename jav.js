let degree=document.getElementById(`number_input`);
let fahrenheit=document.getElementById(`to_fahrenheit`);
let celsius=document.getElementById(`to_celsius`);
let paragraph=document.getElementById(`answer_line`);
let answer;

function convert(){
    
    if(fahrenheit.checked){
        answer=Number(degree.value);
        answer= answer * 9 / 5 + 32;  
        paragraph.textContent=`F= ${answer.toFixed(2)}`;
    }
    else if(celsius.checked){
        answer=Number(degree.value);
        answer= (answer-32) * (5 / 9);
        paragraph.textContent=`C= ${answer.toFixed(2)}`;
    }
    else{
        paragraph.textContent=`Please select a unit`;
    }
}


