function addMore () {
    let name =document.getElementById('name').value;
    if (name=='') {
        document.getElementById('error').innerHTML="Please Enter a Value";
    }else{
        let box=document.getElementById('box');
        let li=document.createElement('li');
        li.textContent=name;

        box.appendChild(li);

        let a=document.createElement('a');
        a.textContent='x'
        a.href="javascript:void(0)";
        a.className='remove'
        li.appendChild(a);
    }
    //To Remove data from textbox
    document.getElementById('name').value="";
}
let btn=document.querySelector('ul');
btn.addEventListener('click' ,function(e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
});