


// Generics in TypeScript

// Generics allow us to create reusable components that can work with a variety of types rather than a single one. 
// This is particularly useful when we want to create functions, classes, or interfaces that can operate on different data types while still maintaining type safety.

class NumberBox {
    items: number[] = [];
    add(item: number) {
        this.items.push(item);
    }
    get(index: number): number | undefined {
        return this.items[index];
    }
}

class StringBox {
    items: string[] = []
    add(item: string) {
        this.items.push(item);
    }
    get(index: number): string | undefined {
        return this.items[index];
    }
}

// solution with generics
// template parameter T can be any type, and it will be replaced with the actual type when we create an instance of the class.
class Box<T> {
    items: T[] = [];
    add(item: T) {
        this.items.push(item);
    }
    get(index: number): T | undefined {
        return this.items[index];
    }
}

const numberBox = new Box<number>();
numberBox.add(42);
console.log(numberBox.get(0)); // 42

const stringBox = new Box<string>();
stringBox.add("Hello, Generics!");
console.log(stringBox.get(0)); // Hello, Generics!