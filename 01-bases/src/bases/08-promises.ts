

console.log('Inicio');


/**
 * Promesas:
 * pueden pasar dos cosas o que se cumpla la promesa o que no se cumpla la misma, tambien hay condiciones
 * 
 */
new Promise ( (resolve, reject) => {
    
    //resolve('Mi amigo cumplio')

    reject('Mi amigo no cumplio');



}).then( (message) => {
    console.log(message)
}).catch(errorMessage => console.log(errorMessage))
.finally(()=> console.log('Fin de la promesa'))








console.log('Fin');
