const sum = (a,b) => {
    return a + b;
};

const square = x => x * x;

const greet = (name = 'Anonymous') => {
    return `Hello ${name}`;
};

const userInfo = () => {
    return {name: 'jora',age: 29};
}

test('testing sum', () =>{
    const result = sum(3,4);
    expect(result).toBe(7);
});

test('return hello with input name', () =>{
    const result = greet('jora');
    expect(result).toBe('Hello jora');
});

test('testing userInfo', () =>{
    var obj = userInfo();
    expect(obj).toEqual({name: 'jora',age: 29});
});

test('return hello with no name',()=>{
    const result = greet();
    expect(result).toBe('Hello Anonymous');
});

test('No way to pass!!',() => {
    // throw new Error('Error occured ...');
});

test('Should square a number',() => {
    const result = square(7);
    expect(result).toBe(49);
})