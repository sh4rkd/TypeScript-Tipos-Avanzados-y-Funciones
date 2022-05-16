const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
/* //no permite mutaciones el readonly sin el si
numbers.push(6);
numbers.pop();
numbers.unshift(1);
*/

//nos permite usar estos metodos
numbers.filter(n => n > 2);
numbers.reduce((a, b) => a + b);
numbers.map(n => n * 2);