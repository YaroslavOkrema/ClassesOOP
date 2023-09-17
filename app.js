// Приватные(#)
// Защищенные(_) 

class User {
    constructor(name) {
       // this.name = name;
    }
    #test = 'Hohoho'
    #url = 'https://backend.ex';
    set name(name) {
        console.log('Privat = ' + this.#test);
        this._name = name.trim().toLowerCase();
    }
    get name() {
        return this._name;
    }
    one () {
        console.log(this.#test);
    }
}

const student = new User('Ivan');
student.name = '   Ivan    '; 
// student._name = 'Ivan'; !!!!
console.log(student);
console.log(student.name);
//console.log(student.#test);

class User2 extends User {};
const student2 = new User2();
student2.name = 'Roma';