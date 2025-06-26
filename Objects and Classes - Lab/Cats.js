function Cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let entry of array) {
        let [name, age] = entry.split(' ');
        let cat = new Cat(name, Number(age));
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }
}

Cats(['Mellow 2', 'Tom 5']);