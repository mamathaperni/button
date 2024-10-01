// using tag
//  let para =document.getElementById('p')[1];
// //  console.log(para);
// console.log(para.innerHTML);

//using class name
//  let para =document.getElementsByClassName('demo')[1];
// console.log(para.textContent);



//using id
//  let para=document.getElementById('test');

//  console.log(para.textContent);
//  para.textContent='this is js para';// to change content
//  console.log(para.textContent);

//  let para=document.querySelector('#test');
 
//  console.log(para.textContent);






// for button creation
 let a=document.getElementById("butn1");
 let b=document.getElementById("butn2");
 let c=document.getElementById("butn3");
 let d=document.getElementById("butn4")
let m=document.getElementById("head");
function show(){
    m.textContent="this is my first para";
}
function hide(){
    m.textContent=".....";
}
function backgroundColor(){
    m. style.backgroundColor="orange";
}
function hidebackgroundColor(){
    m.style.backgroundColor="";
}