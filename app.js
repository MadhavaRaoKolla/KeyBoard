let keys = document.querySelectorAll(".key"); //all keys
let space = document.querySelector('.space'); 
let caps = document.querySelector('.caps');
let enter = document.querySelector('.enter');
let tab = document.querySelector('.tab');
let shiftLeft = document.querySelector('.shift_left');
let shiftRight = document.querySelector('.shift_right');
let backspace = document.querySelector('.backspace');
let textArea = document.querySelector('.textarea');
let alphs = document.querySelectorAll('.alph'); //alphabets
let isCapsOn = false;

for (let i = 0; i<keys.length; i++) {
    keys[i].setAttribute('lowerCase', keys[i].innerText.toLowerCase()); //keys
    keys[i].setAttribute('upperCase', keys[i].innerText.toUpperCase()); //capitals
}

const capsOn = () => {
    for (let i = 0; i < alphs.length; i++) {
        alphs[i].innerText = alphs[i].innerText.toUpperCase();
    }
};

const capsOff = () => {
    for (let i = 0; i < alphs.length; i++) {
        alphs[i].innerText = alphs[i].innerText.toLowerCase();
    }
};

const handleClick = (e) => {
    let keyValue = e.target.getAttribute('lowerCase');
    let upperCaseValue = e.target.getAttribute('upperCase');   
    switch(keyValue){
        case "backspace":
            textArea.value = textArea.value.substr(0,textArea.value.length-1);
            break;
        case "tab":
            textArea.value += "\t";
            break;
        case "enter":
            textArea.value += "\n";
            break;
        case "shift":
            textArea.value += "";
            break;
        case "space":
            textArea.value += " ";
            break;
        case "caps":
            if(isCapsOn) capsOff();
            else capsOn();
            isCapsOn=!isCapsOn;
            break;
        default:
            if (isCapsOn) textArea.value += upperCaseValue;
            else textArea.value += keyValue;        
    }
    e.target.classList.add('active');
    setTimeout(() => {
        e.target.classList.remove('active');
    }, 100);
};

for (let i = 0; i<keys.length; i++) {
    keys[i].addEventListener('click', handleClick);
}

//keyboard pressing 
window.addEventListener("keydown", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if ((e.key == keys[i].getAttribute('lowerCase')) || (e.key == keys[i].getAttribute('upperCase'))) {
            keys[i].classList.add('active');
        }
    }
    if (e.code == "Space") {
        space.classList.add('active');
    }
    if (e.code == "CapsLock") {
        console.log(isCapsOn)
        isCapsOn = !isCapsOn;
        console.log(isCapsOn);
        caps.classList.add("active")
        if (isCapsOn) {
            capsOn();
        } else {
            capsOff();
        }
    }
    if (e.code == "Tab") {
        tab.classList.add('active');
    }
    if(e.code == "ShiftLeft"){
        shiftRight.classList.remove("active");
        shiftLeft.classList.add("active");
    }
    if(e.code == "ShiftRight"){
        shiftLeft.classList.remove("active");
        shiftRight.classList.add("active");
    }
    if(e.code == "Enter"){
        enter.classList.add('active');
    }
    if(e.code == "Backspace"){
        backspace.classList.add('active');
    }
});


//keyboard releasing
window.addEventListener("keyup", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if ((e.key == keys[i].getAttribute('lowerCase')) || (e.key == keys[i].getAttribute('upperCase'))) {
            keys[i].classList.remove('active');
        }
    }
    if (e.code == "Space") {
        space.classList.remove('active');
    }
    if (e.code == "Tab") {
        tab.classList.remove('active');
    }
    if(e.code == "CapsLock"){
        // console.log(isCapsOn)
        caps.classList.remove("active")
    }
    if(e.code == "ShiftLeft"){
        shiftLeft.classList.remove('active');
    }
    if(e.code == "ShiftRight"){
        shiftRight.classList.remove('active');
    }
    if(e.code == "Enter"){
        enter.classList.remove('active');
    }
    if(e.code == "Backspace"){
        backspace.classList.remove('active');
    }
});
