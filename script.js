const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2') /* el # se usa como selector de id*/
const btn = document.querySelector('#btnCalcular')
const pResul = document.querySelector('#result')

form.addEventListener ('submit' , sumarInputValues )
/*escuchador de eventos, ejecuto codigo JS cada que se le llama y necesita un evento que es que vamos a ejecutar y el segundo es el codigo o funcion JS que ejecutaremos cuando se llame */

function sumarInputValues(event) {
       
    event.preventDefault()
   const suma = input1.value + input2.value
   pResul.innerText = "Resultado: " + suma
} 


