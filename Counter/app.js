let Increase = document.getElementById('inc');
let reset = document.getElementById('reset');
let decrease = document.getElementById('dec');
let num = document.getElementById('num');
num.innerText=0;


Increase.addEventListener('click', function () {
    // console.log('clicked');
    num.innerText++;
    if(num.innerText%2==0){
        console.log('even')
        num.style.color='green'
    }
    else {
        console.log('odd')
        num.style.color='red'

    }
});

reset.addEventListener('click', function () {
    // console.log('clicked');
    num.innerText=0;
});

decrease.addEventListener('click', function () {
    // console.log('clicked');
    num.innerText--;
    if(num.innerText<1){
        num.innerText=0;
    }
    if(num.innerText%2==0){
        console.log('even')
        num.style.color='green'
    }
    else {
        console.log('odd')
        num.style.color='red'

    }
    
});
