
export const person ={
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        zip: 513131,
        lat: 14.4648,
        lng: 78.789798
    }
} //as const;

/**
 * as const; = hace que no sea nada modificable del objeto, no quitar ningun valor
 */


/**
 * ... spreed hace que tome la misma informacion de referencias
 */
//const persona2 = {...person};

/**
 * clono el objeto para poder reutilizarlo
 */
const persona2 = structuredClone(person);

persona2.lastName = 'Parker';
persona2.address.city    = 'LA';

console.log({person});
console.log({persona2});

