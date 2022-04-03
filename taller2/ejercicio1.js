/*1.PROBLEMA: Yoda el maestro jedí, necesita asignar a sus aprendices 
Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años
Inicialmente, se debe programar una función que asocie los datos de:
{nombre, planeta, edad y estatura} de 1 Padawan a un objeto (10 
segundos) y una vez este objeto sea creado se debe llamar a una función 
secundaria que clasifique y muestre en consola la actividad asignada al 
Padawan
*/

function asociarDatos(nombre, planeta, edad,estatura, callback){
    setTimeout(function(){
        let aprendiz={
            nombreAprendiz: nombre,
            planeta: planeta,
            edadAprendiz: edad,
            estaturaAprendiz: estatura
        }

        callback(aprendiz)

    },10000)
}
asociarDatos("carolina","laura",12,1.55, function(aprendiz){
    
        if(aprendiz.edadAprendiz < 15){
            console.log(`${aprendiz.nombreAprendiz} tu actividad asignada es: Manejo de la fuerza`)
        }
        else if (aprendiz.edadAprendiz > 15){
            console.log(`${aprendiz.nombreAprendiz} tu actividad asignada es: Manejo del sable de luz`)
        }
        else{
            console.log(`ERROR, digite nuevamente el valor`)
        }
})