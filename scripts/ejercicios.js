
    var btnResultado = document.getElementById('Resolver')
    btnResultado.addEventListener("click", resolver)

    var rta= window.prompt('Selecciona color rojo, amarillo o azul');

    while(rta != "amarillo" && rta != "azul" && rta != "rojo" ){
          alert("La opción seleccionada no es amarillo");
        rta= window.prompt('Selecciona color rojo, amarillo o azul');
    }
    

 
function resolver(){
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    var respuesta = 0;

    if(document.getElementById("operacion1").checked){

       var respuesta = num1 + num2
    }
    else if(document.getElementById("operacion2").checked){

        var respuesta = num1 - num2
    }
    else if(document.getElementById("operacion3").checked){

        var respuesta = num1 * num2
    }
    else if(document.getElementById("operacion4").checked){

        var respuesta = num1 / num2
    }       


    document.getElementById('respuesta').value = respuesta;

        alert("El resultado de la operación es: " + respuesta );        
}


var numeroTabla = 1;
while (numeroTabla <=10) {
    var multiplicador = 1;

    document.write("Tabla del " + numeroTabla + ":" + "<br>");

    while (multiplicador <=10) {
        var res = numeroTabla * multiplicador;
           document.write(numeroTabla + " x " + multiplicador + " = " + res + "<br>");
           multiplicador++;
    }
document.write("<br>-------------------------<br>");
numeroTabla++;    
}

for(let i=1; i <=10; i++){
    document.write("Esta es la vuelta número: " + i + "<br>");
}


var matriz = [
     [1,2,3]
     [4,5,6]
     [7,8,9]
]
alert(matriz[2][1])