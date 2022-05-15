/*array de 2 tipos de datos*/
const prices: (number|string)[] = [10.99, 5.99, 3.99, 6.59,'free'];

const user: [string, number] = ['sharkd', 15];

console.log(user);

user[0] = 'fred';
user[1] = 20;

console.log(user);

//destructuring de user
const [username, age] = user;
console.log(username, age);
