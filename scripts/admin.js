//SIMULACION BASE DE DATOS  
var habitaciones =[
    [101,"LV",],
    [102,"LV"],
    [103,"LV",],
    [201,"SV"],
    [202,"SV",],
    [203,"SO"],
]
var reservas =[103,202,203];

///Referencia de los estados:
/*
 LV: Limpia y vacía
 LO: Limpia y Ocupada
 SV: Sucia y vacía
 SO: Sucia y ocupada
*/
//DECLARACIONES DE VARIABLES

var seccionCreacion = document.getElementById('seccion-creacion');
var seccionEstado = document.getElementById('seccion-estado');
var seccionReservas = document.getElementById('seccion-reservas');

var btnActualizarEstado = document.getElementById('btnActualizarEstado');
var btnActualizarReservas = document.getElementById('btnActualizarReservas');
var btnCreacion = document.getElementById('btn-creacion');
var btnEstado = document.getElementById('btn-estado');
var btnReservas = document.getElementById('btn-reservas');
var btnreservarHabitacion = document.getElementById('reservar-habitacion');

var selectHabitaciones = document.getElementById('habitacion-select');


//LISTENERS
btnCreacion.addEventListener('click', mostrarSeccionCreacion)
btnEstado.addEventListener('click', mostrarSeccionEstado)
btnReservas.addEventListener('click', mostrarSeccionReservas)
btnActualizarReservas.addEventListener('click', actualizarReservas)
btnreservarHabitacion.addEventListener('click', reservarHabitacion)

// Con jQuery
//$(btnReservas).click(mostrarSeccionReservas);


//FUNCIONES

btnActualizarEstado.addEventListener('click', function(){
   for(let i=0; i< habitaciones.length;i++){
       switch(habitaciones[i][1]){
        case "LV":
            document.getElementById("estado-" + habitaciones[i][0]).textContent = "Limpia y Vacía";
            break;
        case "SV":
            document.getElementById("estado-" + habitaciones[i][0]).textContent = "Sucia y Vacía";
            break;
        case "LO":
            document.getElementById("estado-" + habitaciones[i][0]).textContent = "Limpia y Ocupada";
            break; 
        case "SO":
            document.getElementById("estado-" + habitaciones[i][0]).textContent = "Sucia y Ocupada";
            break;             
        default:
            document.getElementById("estado-" + habitaciones[i][0]).textContent = "Desconocido";
       }
   };
})

function actualizarReservas(){
    reservas.forEach(function(elem,index){
        var fila = document.getElementById('reserva-' + elem);
        fila.children[1].textContent = "Ocupada"; 
    });
}

function mostrarSeccionCreacion(){
    seccionCreacion.style.display = "block";
    seccionReservas.style.display = "none";
    seccionEstado.style.display = "none";
}     
function mostrarSeccionEstado(){
    seccionEstado.style.display = "block";
    seccionReservas.style.display = "none";
    seccionCreacion.style.display = "none";
}
function mostrarSeccionReservas(){
    seccionReservas.style.display = "block";
    seccionEstado.style.display = "none";
    seccionCreacion.style.display = "none";
} 

function leerReservas(){

    while(selectHabitaciones.firstChild){
        selectHabitaciones.removeChild(selectHabitaciones.firstChild);
    }

    var habitacionesNoReservadas = [];
    for(let i=0; i < habitaciones.length; i++){
        var numeroHabitacion = habitaciones[i][0];

        if( !reservas.includes(numeroHabitacion) ){
            habitacionesNoReservadas.push(habitaciones[i]);
        }
    }
    for(let j = 0; j < habitacionesNoReservadas.length; j++ ){
        var opcion = document.createElement('option');
        opcion.value = habitacionesNoReservadas[j][0];
        opcion.textContent = habitacionesNoReservadas[j][0];

        selectHabitaciones.appendChild(opcion);
    }
}

function reservarHabitacion(){
    var habSeleccionada = selectHabitaciones.value;
    reservas.push(parseInt(habSeleccionada));
    leerReservas();
}

//On Loading
$(document).ready(function() {
    leerReservas();
    actualizarReservas();
});








    




