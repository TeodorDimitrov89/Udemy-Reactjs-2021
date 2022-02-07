//Primitives: number, string, boolean
//More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Primitives:
var age;
age = 11;
var userName;
userName = 'Teo';
var isInstructor;
isInstructor = false;
//Arrays and Objects
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Teo',
    age: 23
};
var people;
//Type inference
// let course = 'React - The Complete Guide'; //type inference is string, no need to explicitly set type when we initiate variable with default value 
// course = 123456;
//Union Types
var course = 'React - The Complete Guide';
course = 123456;
//Functions & types
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
//Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
;
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringsArray = insertAtBeginning(['a', 'b', 'c'], 'd');
