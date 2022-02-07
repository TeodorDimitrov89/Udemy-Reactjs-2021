//Primitives: number, string, boolean
//More complex types: arrays, objects
// Function types, parameters

//Primitives:

let age:number;

age = 11;

let userName:string;
userName = 'Teo';

let isInstructor: boolean;

isInstructor = false;

//Arrays and Objects

let hobbies: string[];
hobbies = ['Sports','Cooking'];

// Type Aliases
type Person = {
  name: string;
  age: number;
}


let person: Person;

person = {
  name: 'Teo',
  age: 23
};

let people: Person[];


//Type inference

// let course = 'React - The Complete Guide'; //type inference is string, no need to explicitly set type when we initiate variable with default value 

// course = 123456;

//Union Types



let course: string | number = 'React - The Complete Guide'; 

course = 123456;

//Functions & types

function add(a: number, b: number) { // type number
  return a + b ;
}

function printOutput(value:any) { // type void
  console.log(value); 
}


//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
};


const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

const stringsArray = insertAtBeginning(['a', 'b', 'c'], 'd');


