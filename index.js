let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let allinput = ['1','2','3','4','5','6','7','8','9','0','/','*','-','+','.','%','C','=','(',')'];
// console.log(allinput);
let screenValue = "";


// click event
for(let item of buttons){
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        // console.log(buttonText);
        
        mode(buttonText);
    })
}

// Keydown event

document.addEventListener('keydown', (e)=>{
    let keyText = e.key;
    if (allinput.includes(keyText)) {
    mode(keyText);
    }else if(keyText =='Backspace'){
    
       screenValue = screenValue.substring(0, screenValue.length-1);
       screen.value = screenValue;
    
    }else{
    screen.value = screenValue;
    }
   
});

// chooses mode and evaluate;
function mode(buttonPress) {
    if(buttonPress == "C"){
            
        screenValue = "";
        screen.value = screenValue;


    }else if(buttonPress == '='){
        screen.value = eval(screenValue);
    }else if(buttonPress== "infinity") {
        screenValue = "undefine"
    }else if (buttonPress=="%"){
        buttonPress = '*0.01';
        screenValue+=buttonPress;
        screen.value = eval(screenValue);
    }else{
        screenValue += buttonPress;
        screen.value = screenValue;
    }
}