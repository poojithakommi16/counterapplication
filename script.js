const counter=document.getElementById('counter');
const add=document.getElementById('add');
const sub=document.getElementById('sub');
let count=0;
function addition(){
    count++;
    if(count<10){
        counter.innerText="0" + count;
    }
    else{
    counter.innerText=count;
    }
    console.log(count);
 }
function subtraction(){
    count--;
    if(count<0){
        alert("zreo has occured");
        count=0;
    }
    else if(count<10){
        counter.innerText="0" + count;
    }
    else{
        counter.innerText=count;   
    }
    console.log(count);
} 
add.addEventListener('click',addition);
sub.addEventListener('click',subtraction);
