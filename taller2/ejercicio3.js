// PROBLEMA: Grogu ha iniciado su entrenamiento Jedi y debe
// activar un software que permita clasificar su dieta:
// alimento = {
//  nombre,
//  tipo (Puede ser vegetal, animal, insecto),
//  nivel de energía (números entre 100-500)

// }
// Cree un programa que permita recibir 10 alimentos diferentes y
// mediante una función primaria después de 5 segundos se
// pueda obtener solo los alimentos de tipo vegetal que entreguen
// mas de 200 unidades de energía. Finalmente, una función
// callback debe permitir entregar la sumatoria de niveles de
// energía entregados por los alimentos vegetales consumidos en
// la dieta de Grogu.


let nombres = ['Repollo','Zanahoria','lechuga','Fresa','Mango','Cereza','Grillo','Cerdo']
let tipoAlimentos = ['animal','vegetal','insectos']

let alimentos = []

for(let i = 0; i < 50; i++){
    let alimento = {}

    alimento.nombre = nombres [Math.floor(Math.random() * nombres.length)]
    alimento.tiposAlimento = tipoAlimentos [Math.floor(Math.random() * tipoAlimentos.length)]
    alimento.energia = Math.floor(Math.random() * (100,500)+100);
    alimentos.push(alimento);
}
//console.log (alimentos)

function filtrarVegetales(dietas,callback){
    setTimeout(()=>{ 
        let tipos = dietas.filter(function(dieta){
            return (dieta.tiposAlimento == 'vegetal' && dieta.energia > 200)

        })
        console.log(tipos)
        callback(dietas)
    }, 5000)
}

filtrarVegetales(alimentos,function (dietas){
    let resultadoSuma = 0;
    dietas.forEach(energiaa=>{
        resultadoSuma += energiaa.energia; 
    });

    console.log(`La cantidad total de energias de la dieta de grogu es : ${resultadoSuma} energias`);
}); 