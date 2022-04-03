
/*Watto paga a su personal de ventas un salario de 
3500000 mensuales, más una comisión de 1500000 por cada 
nave vendida, menos el 5% de deducciones aplicada solo a las 
comisiones. Codifica un programa que calcule e imprima el 
salario mensual de un vendedor dado*/

//funcion tradicional
const salarioMensual = 35000000
const comision = 15000000
let comisionConDescuento = comision - (5*comision/100)

function calcularSalario(navesVendidas){
    
    let sumaComision = navesVendidas * comisionConDescuento
    let salarioFinal = sumaComision + salarioMensual
    
    return salarioFinal

}
console.log(` el salario mensual vendido de Juan es: ${calcularSalario(4)}`)


//Funcion fecha
let  Salario = (navesVendidas) => {
    
    let sumaComision = navesVendidas * comisionConDescuento
    let salarioFinal = sumaComision + salarioMensual
    
    return salarioFinal

}
console.log(` el salario mensual vendido de Juan es: ${Salario(1)}`)
