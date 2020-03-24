/*Repita una cadena dada str(primer argumento) por numveces (segundo argumento). 
Devuelve una cadena vacía si numno es un número positivo.*/

'use strict';

const button = document.getElementById("button");
button.addEventListener('click', ()=>{
 let string = document.getElementById('string').value+" ";
 let num = document.getElementById('num').value;
 let area = "";
   if(num>0){
       area = string.repeat(num);
   }else{
       area = "";
   }
   textarea.innerHTML = area;
});