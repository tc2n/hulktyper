const text = document.querySelector('.menu__text');
const box = document.querySelector('.box');
const wrap = document.querySelector('.menu__wrap');
const fullscreen = document.querySelector('.menu__fullscreen');
const container = document.querySelector('.container');


function update(){
    const html = text.value.split('').map(letter => {
        if (letter.match(/[0-9]/i)){
            return `<div class="box__letter number">${letter}</div>`;
        } else if (letter.match(/[a-z]/i)) {
            return `<div class="box__letter alpha">${letter}</div>`
        } else {
            return `<div class="box__letter symbol">${letter}</div>`
        }
    }).join('');
    box.innerHTML = html;
    const len = text.value.length;
    if(len>4) {
        [...box.children].forEach(letter => {
            letter.style.setProperty('height', `${4/len*30}vw`);
            letter.style.setProperty('width', `${4/len*20}vw`);
            letter.style.setProperty('font-size', `${4/len*25}vw`);
            letter.style.setProperty('margin', `${0.5/len}rem`);
        });
    }
}

function updatewrap() {
    if(this.checked ===true) {
        box.style.setProperty('flex-wrap', 'wrap');
        update();
        text.focus();
    }
    else {
        box.style.setProperty('flex-wrap', 'nowrap');
        update();
        text.focus();
    }
}

function toggleFullscreen() {
    if(this.checked===true) {
        document.documentElement.requestFullscreen();
        text.focus();
    }
    else {
        document.exitFullscreen();
        text.focus();
    }
}

text.addEventListener('change', update);
text.addEventListener('keyup', update);
container.addEventListener('click', () => {text.focus()});
window.addEventListener('keydown', ()=> {text.focus()});
wrap.addEventListener('click', updatewrap);
fullscreen.addEventListener('click', toggleFullscreen);
text.focus()