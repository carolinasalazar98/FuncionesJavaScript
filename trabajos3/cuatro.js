/*PROBLEMA: QUI-GON JINN está encargado de revisar un arreglo 
de 20 sables de luz y contabilizar la cantidad de cables que 
tienen energías menores a 20 Joules 
Nota: el formato de cada sable es:
cable={
color:verde,
 energía: 50 ,
 portafor: Obi Wan
}*/

/*let cables = [
  { color: "verde", energia: 50, portador: "obiWan" },
  { color: "rojo", energia: 11, portador: "obiWan" },
  { color: "rosa", energia: 23, portador: "obiWan" },
  { color: "morado", energia: 35, portador: "obiWan" },
  { color: "amarillo", energia: 8, portador: "obiWan" },
  { color: "marrón", energia: 59, portador: "obiWan" },
  { color: "naranja", energia: 17, portador: "obiWan" },
  { color: "violeta", energia: 65, portador: "obiWan" },
  { color: "cafe", energia: 14, portador: "obiWan" },
  { color: "negro", energia: 76, portador: "obiWan" },
  { color: "blanco", energia: 89, portador: "obiWan" },
  { color: "celeste", energia: 90, portador: "obiWan" },
  { color: "azul", energia: 55, portador: "obiWan" },
  { color: "gris", energia: 88, portador: "obiWan" },
  { color: "vinotinto", energia: 22, portador: "obiWan" },
  { color: "borgoña", energia: 66, portador: "obiWan" },
  { color: "fucsia", energia: 44, portador: "obiWan" },
  { color: "crema", energia: 33, portador: "obiWan" },
  { color: "azul Cielo", energia: 45, portador: "obiWan" },
  { color: "coral", energia: 61, portador: "obiWan" },
  { color: "cobre", energia: 59, portador: "obiWan" },
];

let cablesFiltrar = cables.filter((cable)=>cable.energia < 20)
console.log(cablesFiltrar)
console.log("Cables menores que 20 son:  " + cablesFiltrar.length)*/

let colores=['Negro', 'Naranjado', 'Gris', 'Azul']
let energias=['55', '22', '5', '33']
let portadores=['Obi Wan', 'Obi Wan', 'Obi Wan', 'Obi Wan']

let numero=Math.floor(Math.random()*colores.length)
let numero2=Math.floor(Math.random()*energias.length)
let numero3=Math.floor(Math.random()*portadores.length)

let cables=[]

for(let i=0; i<20; i++){

    let cable={}

    cable.color=colores[Math.floor(Math.random()*colores.length)]
    cable.energia=energias[Math.floor(Math.random()*energias.length)]
    cable.portador=portadores[Math.floor(Math.random()*portadores.length)]
    cables.push(cable)
}

let cablesFiltrados = cables.filter((cable)=>cable.energia<20)
console.log(cablesFiltrados)

