

function addTwoNumber(a: number, b: number): number{
    return a+b;
}
var resultAdd: number = addTwoNumber(1, 2);
console.log(resultAdd);

// primitieve
// number
let age: number;
age = 12;

// string
let userName: string;
userName = 'anhvi';

// boolean
let isInstructor: boolean;
isInstructor = false;

// arrays, object
// arrays
let hobbies: string[];
hobbies = ['bia', 'movie']

// object
let person: {name: string, age: number}
person = {name: 'anhvi', age: 31};

// type in inference
let course = 'angular - learning';
//course = 132; -> throw error

// union type
let company: string | number | string[];
company = 'axon active';
company = 10;

// type alias
type Human = {
    name: string,
    age: number
}
let worker: Human;
worker = {
    name: 'anhvi',
    age: 10
} 

// function type and type
function sumNumber(a: number, b: number): number{
    return a+b;
}
let sumResult = sumNumber(1, 2);
console.log(sumResult);

function printSomething(): void{
    console.log('hello world');
}
printSomething();

// generic
function insertAtBegin(array: any[], value: any){
    const newArr = [value, ...array];
    return newArr;
}
insertAtBegin([1, 2, 3], 5);

function insertGeneric<T>(arr: T[], value: T){
    const newArr = [value, ...arr];
    return newArr;
}
insertGeneric([1, 3, 4], 2);

// class
class Student{
    private firstName: string;
    private age: number;

    constructor(firstName: string, age: number){
        this.firstName = firstName;
        this.age = age;
    }
    enroll(course: string){
        // do something here
        console.log("hello world");
    }
}
const student = new Student("anhvi", 30);


// interface
interface Animal{
    firstName: string;
    age: number;

    // abstract method
    greet: () => void;
}
let cat: Animal;
cat = {
    firstName: 'cat',
    age: 2,
    greet(){
        console.log('gau gau gau');
    }
}

// what is the differences between interface and type
//interface can be implement by class name

class Instructor implements Animal{
    firstName: string;
    age: number;
    greet(){console.log("hello world")}
}

const ins = new Instructor();
ins.firstName = "name";
ins.age = 10;
ins.greet = () => {console.log("hello world")}