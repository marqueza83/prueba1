var wrapper = document.getElementById('wrapper');


function myFuncion(){
var nuevoDiv = document.getElementById('tarjeta').cloneNode(true);

var titulo = document.getElementById('titulo');
var descripcion = document.getElementById('descripcion');
var telefono = document.getElementById('telefono');
var ubicacion = document.getElementById('ubicacion');

var titulo1 = document.getElementById('titulo1').value;
var descripcion1 = document.getElementById('descripcion1').value;
var ubicacion1 = document.getElementById('ubicacion1').value;
var telefono1 = document.getElementById('telefono1').value;

titulo.innerHTML = titulo1;
descripcion.innerHTML = descripcion1;
ubicacion.innerHTML = ubicacion1;
telefono.innerHTML = telefono1;


wrapper.appendChild(nuevoDiv);


};




function eliminar()
{

var contador = document.getElementById('tarjeta').length;
 var elem = document.getElementById('remover');
if (contador >= 1){
   
	elem.parentNode.remove();

}
}

