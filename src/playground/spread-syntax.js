
let pikachu = {name: 'Pikachu'};
const status = {hp: 40, attack: 60, defense: 45 , abilities: { speed: 100, strentgh: 69 }};

pikachu['hp'] = status.hp;
pikachu['attack'] = status.attack;
pikachu['defense'] = status.defense;

Object.assign(pikachu,status);

let myobj = {...pikachu,...status};
// console.table(myobj);

let dragons = ['bulbasaur','Metapod', 'Weedle'];


dragons = ['abrok',...dragons,'raichu','sandshrew'];
console.log(dragons);