/** 
 * el importa comun es por defector
 * cuando contiene {} importo algo en particular
 */
import heroes, { owners } from "../data/heroes";


export const getHeroById = (id:number) => {
    return heroes.find(heroes => heroes.id === id) ?? {};
}

export const getHeroByOwner = (owner: string) => {
    return heroes.filter(heroes => heroes.owner === owner);
}

console.log(getHeroById(1))
console.log(getHeroByOwner('DC'));

