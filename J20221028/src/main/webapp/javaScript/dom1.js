//DOM 을 이용해서..

document.addEventListener('DOMContentLoaded', function(){

    
let show = document.getElementById('show');
let form = document.createElement('form');
//id 부분
let txt = document.createTextNode('id');
let input = document.createElement('input');
let br= document.createElement('br');

form.appendChild(txt);
form.appendChild(input);
input.setAttribute('type', 'text');
input.setAttribute('id','id')
form.appendChild(br);
show.appendChild(form);
//name
txt = document.createTextNode('name');
input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','name');
br = document.createElement('br');

form.appendChild(txt);
form.appendChild(input);
form.appendChild(br);
show.appendChild(form);
//phone
txt = document.createTextNode('Phone');
input = document.createElement('input');

input.setAttribute('type','text');
input.setAttribute('id','phone');
br = document.createElement('br');

form.appendChild(txt);
form.appendChild(input);
form.appendChild(br);
show.appendChild(form);
//전송
input = document.createElement('input');

input.setAttribute('type','submit');
input.setAttribute('value','전송');

form.appendChild(input);
show.appendChild(form);

document.getElementById('show').appendChild(form);

console.log(result);

    
// for(let i=0; i<result.length; i++){
//     console.log(`${result[i].first_name}, ${result[i]['last_name']}`)
// }
// for(let obj of result){
//     console.log(`id: ${obj.id}, email: ${obj['email']}`)
// }
// console.clear()
// result.forEach(function(value,index){

//     if(index<2)
//     console.log(value,index);

// });
});