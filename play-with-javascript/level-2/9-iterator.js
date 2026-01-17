

// data-structure/collection => memory layout to store data
// iterator => an object which helps to traverse/loop/iterate a data-structure
// iterable => a data-structure which provides iterator

//------------------------------------------------


let arr = [10, 20, 30]; // array is a data-structure which is iterable
// get iterator from iterable
let it = arr[Symbol.iterator](); // iterator

//------------------------------------------------
// create your own iterable data-structure
//-------------------------------------------------
let box = {
    items: [],
    add(item) {
        this.items.push(item);
    },
    [Symbol.iterator]() {
        let index = 0;
        let items = this.items;
        return {
            next() {
                if (index < items.length) {
                    return { value: items[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
}
box.add(100);
box.add(200);
box.add(300);
box.add(400);
box.add(500);

//-------------------------------------------------

let boxNumbers=[...box] // iterable objects can be used with spread operator
console.log(boxNumbers); // [100, 200, 300, 400, 500]


//-------------------------------------------------

let [first, second, ...rest] = box; // iterable objects can be used with destructuring
console.log(first, second); // 100 200
console.log(rest); // [300, 400, 500]

//-------------------------------------------------

// es6, for..of loop works with iterable objects
for (let item of box) {
    console.log(item); // 100 200 300 400 500
}

//-------------------------------------------------