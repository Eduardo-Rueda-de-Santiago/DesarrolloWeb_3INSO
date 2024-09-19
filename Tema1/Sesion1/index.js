class Thing {

    attr;

    constructor(attr = 2) {
        this.attr = attr;
    }

    printAttr() {
        console.log(this.attr);
    }
}


new Thing().printAttr();
new Thing(3).printAttr();

let arr = [1, 2, 4]

for (let i of arr) console.log(i);

let foo = (param1) => {
    console.log('foo is alive!!!');
    console.log(param1);
}

foo("And long will it last!");

const square = (x, y = 1) => {
    return x * x * y
};
console.log(square(2));

arr.map((value, index, array) => {
    console.log(square(value));
});