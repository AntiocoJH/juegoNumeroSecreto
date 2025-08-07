//document es el puente que permite trabajar html con javaScript. 
/*let titulo = document.querySelector('h1'); // En esta linea estamos seleccionando el encabezado h1 con QUERYSELECTOR 
// y luego le asignamos el texto con INNNERHTML.
titulo.innerHTML='JUego del numero secreto';*/
/*let parrafo= document.querySelector('p');
parrafo.innerHTML='Ingresaa un numero del 1 al 10';*/

//funciones

let numeroSecreto = 0;
let numeroMaximo=10;
let intentos=0;
let listaNumerosSorteados=[];

condicionesIniciales();
 
function verificarIntento(){
   
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  /* console.log(numeroDeUsuario);
   console.log(typeof(numeroDeUsuario));
   console.log(numeroSecreto);
   console.log(typeof(numeroSecreto));*/
    console.log(intentos);
    console.log(numeroSecreto);
   if(numeroSecreto===numeroDeUsuario){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez':'veces' }`);
    document.getElementById('reiniciar').removeAttribute('disabled'); 
   }else{
       if(numeroDeUsuario>numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
       }else{
          asignarTextoElemento('p','El numero secreto es mayor');
       }
       intentos++;
      limpiarCaja();
   }

//alert('click desde el boton');
return;
}

function limpiarCaja()
{
   
    let valorCaja = document.querySelector('#valorUsuario').value='';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // En esta linea estamos seleccionando el encabezado h1 con QUERYSELECTOR 
    // y luego le asignamos el texto con INNNERHTML.
   elementoHTML.innerHTML=texto;
   return;
}

function generarNumeroSecreto ()
{
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)  +1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros
if(listaNumerosSorteados.length==numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros');
   
} else {





// si el numero generado esta incluido en la lista hacemos una operacion si no hacermos otra
   if(listaNumerosSorteados.includes(numeroGenerado))
   {
       return generarNumeroSecreto();
   }else{
      listaNumerosSorteados.push(numeroGenerado); //agregamos el numero generado a la lista
      return numeroGenerado;
   }
}
}
function condicionesIniciales()
{
  

  asignarTextoElemento('h1','Juego del numero secreto');
  asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo} `);
  intentos=1; 
  numeroSecreto = generarNumeroSecreto();
   //alert(numeroSecreto);
}

function reiniciarJuego()
{
   
    //limpiar la caja
   //indicar mensaje de intervale de numeros  //inicializar el numero de intentos
   //Generar numero aleatorio
  
      //deshabilitar el boton
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 

}





//hhhhhhhhhhhhhhhhh    DESAFIOS FUNCIONES
/*
function HOLA (){
    console.log('Hola mundo');
    let nombreDeUsuario = document.getElementById('nombreUsuario').value;
    console.log(nombreDeUsuario);
    console.log(`hola ${nombreDeUsuario}`);
}

function dobleNumero( ){
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);  
let doble=numeroDeUsuario*2;
console.log(doble);
return doble;
}

function promedio ()
{
   let numeroDeUsuario1 = parseInt(document.getElementById('valorUsuario1').value);  
   let numeroDeUsuario2 = parseInt(document.getElementById('valorUsuario2').value);    
   let numeroDeUsuario3 = parseInt(document.getElementById('valorUsuario3').value);  
   
   let promedio=parseInt((numeroDeUsuario1+numeroDeUsuario2+numeroDeUsuario3)/3);
   console.log(numeroDeUsuario1+numeroDeUsuario2+numeroDeUsuario3);
   console.log(promedio)
}

function mayor ()
{
   let numeroDeUsuario1 = parseInt(document.getElementById('valorUsuario1').value);  
   let numeroDeUsuario2 = parseInt(document.getElementById('valorUsuario2').value);    
   if (numeroDeUsuario1>numeroDeUsuario2) {
       console.log(`El numero mayor entre el numero ${numeroDeUsuario1} y el ${numeroDeUsuario2} es el ${numeroDeUsuario1}`)
   } else
       console.log(`El numero mayor entre el numero ${numeroDeUsuario1} y el ${numeroDeUsuario2} es el ${numeroDeUsuario2}`)
   
}

function multiplicadoPorSiMismo ()
{
   let numeroDeUsuario1 = parseInt(document.getElementById('valorUsuario1').value);  
    let resultado= numeroDeUsuario1*numeroDeUsuario1;
    console.log(resultado);
   
}*/

/*desafioooooooooooooooooooooo0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;


function calcularPromedio(nota1, nota2, nota3, nota4){
        let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
        return promedio;
}

function verificarAprobacion(promedio){
         return promedio >= 5 ? "Aprobado" : "Reprobado";
}*/