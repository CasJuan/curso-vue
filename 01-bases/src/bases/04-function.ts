
/* function greePerson (name:string) {
    return `Hola ${name}`;
}
 */

/* const greePerson = (name:string) => {
    return `Hola ${name}`;
} */

//const greePerson = (name:string) => `Hola ${name}`;

/* const getUser = () => {
    return {
        uid: 'ABC-123',
        username: 'tony123'
    }
} */

//forma mas simplificada de utilizar quitando el return para que quede mas limio
export const getUser = (uid:string) => ({
        uid: uid,
        username: 'tony123'
    })



const heroes = [
    {
        id:1,
        name:'Batman',
    },
    {
        id:2,
        name:'Superman',
        power:'Super fuerza',
    },
];


const hero = heroes.find( (h) => h.id === 1);

//lo que hace el ? es validar antes el datos que si o si tenga informacion sino nada
console.log(hero?.name);