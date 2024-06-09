let keys = document.querySelectorAll(".key");
let space = document.querySelector('.space');
let caps = document.querySelector('.caps');
let tab = document.querySelector('.tab');
let shiftLeft = document.querySelector('.shift_left');
let shiftRight = document.querySelector('.shift_right');
let alphs = document.querySelectorAll('.alph');
let isCapsOn = false;

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyName', keys[i].innerText);
    keys[i].setAttribute('upperCase', keys[i].innerText.toUpperCase());
}

// Function to switch to uppercase
const capsOn = () => {
    for (let i = 0; i < alphs.length; i++) {
        alphs[i].innerText = alphs[i].innerText.toUpperCase();
    }
};

// Function to switch to lowercase
const capsOff = () => {
    for (let i = 0; i < alphs.length; i++) {
        alphs[i].innerText = alphs[i].innerText.toLowerCase();
    }
};

window.addEventListener("keydown", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if ((e.key == keys[i].getAttribute('keyName')) || (e.key == keys[i].getAttribute('upperCase'))) {
            keys[i].classList.add('active');
        }
    }
    if (e.code == "Space") {
        space.classList.add('active');
    }
    if (e.code == "CapsLock") {
        isCapsOn = !isCapsOn;
        caps.classList.add("active")
        if (isCapsOn) {
            capsOn();
            // caps.classList.add('active');
        } else {
            capsOff();
            // caps.classList.remove('active');
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
});

window.addEventListener("keyup", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if ((e.key == keys[i].getAttribute('keyName')) || (e.key == keys[i].getAttribute('upperCase'))) {
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
        caps.classList.remove("active")
    }
    // if(e.code == "ShiftLeft"){
    //     shiftLeft.classList.remove('active');
    // }
    // if(e.code == "ShiftRight"){
    //     shiftRight.classList.remove('active');
    // }
});
