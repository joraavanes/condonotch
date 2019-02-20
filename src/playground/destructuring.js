
const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
};

'Bad practice'

// function feed(animal){
//     return `feeding ${animal.name}, an ${animal.type} type of animal with ${animal.legs} legs`;
// }

'Good Practice'

const feed = ({name,type,legs} = {name: 'Soli',type: 'reptile',legs: 3}) => {

    return `feeding ${name}, an ${type} type of animal with ${legs} legs`;
};

const result = feed(turtle);
console.log(result);

const another = feed();
console.log(another);