const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() { //VERIFICA LÂMPADA QUEBRADA
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn() { //ACENDE A LÂMPADA
    if(!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() { //APAGA A LÂMPADA
    if(!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() { //LÂMPADA QUEBRADA
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn); 
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);