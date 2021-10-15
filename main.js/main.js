let button = document.querySelector('#btn');
let p = document.querySelector('#p');
let h1 = document.querySelector('#h1');
let navi = document.querySelector('#navi');

button.addEventListener('click', clicksss);

function clicksss(){
    if (!h1.classList.contains('hide')){
        h1.classList.add('hide');
    }else{
        h1.classList.remove('hide');
    }
    if (!p.classList.contains('hide')){
        p.classList.add('hide');
    }else{
        p.classList.remove('hide');
    }
    if (!navi.classList.contains('vis')){
        navi.classList.add('vis');
    }else{
        navi.classList.remove('vis');
    }
};