
let orders = [53,41,150,233,421,500];

let total = 0;
let withTax = [];
let highValue = [];

'Bad practice'

// for( i = 0; i < orders.length ; i++) {

//     total += orders[i];

//     withTax.push( orders[i] * 1.1 );

//     if(orders[i] > 200) {
//         highValue.push(orders[i]);
//     }
// }

// console.log(total);
// console.log(withTax);
// console.log(highValue);

'Good practice'

// Reduce
total = orders.reduce((acc,cur) => acc + cur);
console.log(total);

// Map
withTax = orders.map(v => v * 1.1);
console.log(withTax);

// Filter
highValue = orders.filter(v => v > 200);
console.log(highValue);