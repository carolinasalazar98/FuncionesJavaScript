/*2.PROBLEMA: Han solo y Chewbacca deben infiltrarse en el planeta 
yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte, 
como distractor el imperio ha creado planos falsos y se tiene el dato de 
que el número de serie de estos planos falsos comienza por encima del 
número 10; es decir todos los planos falsos tienen números de serie 
consecutivos comenzando desde el #11. SOLO si se obtiene un plano 
verdadero Chewbacca y Han pueden abordar su nave y ejecutar un 
mensajeen consola avisando que han despegado
Configure la rutina necesaria para despegar la nave utilizando callbacks*/


//DECLARO LA FUNCION PRINCIPAL
function recibirPlanos(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, callback) {
    //PROCESO DE LA FUNCION PRINCIPAL
    setTimeout(function () {
      let planos = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]
      let planosFiltrados = planos.filter(function(plano){
          return(plano>=1 && plano<=10)
      })
      callback(planosFiltrados)
    }, 10000)
  }
  
  //LLAMADO A LA FUNCION PRINCIPAL
  recibirPlanos(100,55,22,15,9,44,11,40,29,78, function(planosFiltrados){
      if(planosFiltrados.length>0){
          console.log("TODO BIEN PUEDE DESPEGAR NAVE")
      }else{
          console.log("DEBE BUSCAR NAVE")
      }
  })
  

