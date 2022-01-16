

const hm = document.querySelector('h3');
const sec = document.querySelector('h6');
const year = document.querySelector('.year');


setInterval(function () {
    let date = new Date();
    let  h = date.getHours();
    let  m = date.getMinutes();
    let  s = date.getSeconds();
    let day = date.getDay();
    let dat = date.getDate();
    let mon = date.getMonth();
    let yea = date.getFullYear();

    hm.innerHTML=`${digital(h)} : ${zerTim(m)}`;
    sec.innerHTML=`${zerTim(s)}`;

    year.innerHTML=`${dayy(day)}/${monthName(mon)}${dat}/${yea-2000}`
}, 1000)



const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const count = document.querySelector('#count');
const h1 = document.querySelector('h1');
const load = document.querySelector('.load');

let counter;
let cleCou;

start.addEventListener('click', function(){
    counter = count.value;
    cleCou = setInterval(function (){

        
        let width = loader(counter, count.value);
        load.style.width = `${width}%`
        
        if (width >= 70 && width <= 100) {
            load.style.backgroundColor='blue';
        } else if (width >= 50 && width < 70) {
            load.style.backgroundColor='#2ecc71';
        } else if (width >= 30 && width < 50) {
            load.style.backgroundColor='#f1c40f';

        } else {
            load.style.backgroundColor='red';
        }
        

        if (counter == 0) {
            clearInterval(cleCou)
        };

        h1.innerHTML= counter--;
    },1000)
})
stop.addEventListener('click', function () {
    clearInterval(cleCou);
})
reset.addEventListener('click', function () {
    clearInterval(cleCou);
    count.value ='';
    h1.innerHTML= 0;
    load.style.width = `100%`
})


// To-Do App..............

const add = document.querySelector('.add');
const addItem = document.querySelector('.additem');
const result = document.querySelector('.result');

add.addEventListener('click', function () {
    let li = document.createElement('li');
    li.className = 'list-group-item mt-2';
    li.innerText = addItem.value;
    result.appendChild(li)
    addItem.value = '';
})