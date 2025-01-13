import { expect, test } from 'vitest'
import {sum, addArray} from '../../src/helpers/sum'
import { describe } from 'node:test';

describe('add function', () => {
    test('adds 1 + 2 to equal 3', () => {
    
        const a = 1;
        const b = 2;
    
        //estimulo
        const result = sum(a,b);
    
        //comportamiento esperado
        expect(result).toBe(a + b);
    
      /* expect(sum(1, 2)).toBe(3) */
    })
});


test ('retornar 0 si el arr esta vacio', () => {

    const numberArray = [];

    const result = addArray(numberArray);

    expect(result).toBe(0);

})