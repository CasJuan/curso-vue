
/* function greePerson (name:string) {
    return `Hola ${name}`;
}
 */

/* const greePerson = (name:string) => {
    return `Hola ${name}`;
} */

const greePerson = (name:string) => `Hola ${name}`;

/* const getUser = () => {
    return {
        uid: 'ABC-123',
        username: 'tony123'
    }
} */

//forma mas simplificada de utilizar quitando el return para que quede mas limio
const getUser = (uid:string) => ({
        uid: uid,
        username: 'tony123'
    })


console.log(getUser('XCZ-1234'));