const h1 = document.querySelector('h1');
const p = document.querySelector('p1');
const parrafito = document.querySelector('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerHTML = 'patito <br> feo'/* nos permite cambiar lo que esta dentro de nuestro html desde el JS y lo toma como codigo html*/
h1.innerText = 'patito <br> feo'/* nos permite cambiar nuestro html desde JS pero lo que introduscamos no lo toma como texto, esta propiedad .Text nos sirve como proteccion por si alguien quiere cambiar el codigo html desde el navegador*/ 
h1.getAttribute("pantalla")/* nos ayuda a leer atributos que tenga nuestra etiqueta*/
h1.setAttribute("class" , "rojo")/* es una forma de modificar nuestros atributos en html desde JS*/
console.log(h1.getAttribute("pantalla"));
h1.classList.add('rojo') /*el classList nos abre el mundo de posibilidades para editar todos los elementos del codigo que contengan una Class*/
input.value = "456" /* accedemos a la propiedad de value del input y la modificamos */
const img = document.createElement("img") /* el createElement nos sirve para crear un nuevo elemento desde el JS pra mat6erlo en nuestro codigo html*/
img.setAttribute('src' , 'https://tierragamer.com/wp-content/uploads/2023/01/Dragon-Ball-GT-Goku-02.jpg')
console.log(img)

pid.innerHTML =""
pid.appendChild(img) /* nos agrega contenido a la parte donde lo estamos llevando*/
