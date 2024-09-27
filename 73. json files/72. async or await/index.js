/*
JSON = (Javascript Object Notation) data-interchange format
Used for exchanging data between a server and a web application
JSON files {key:value} Or [value1, value2, value3] Or [{}, {}, {}]

JSON.stringify() = converts a JS object to a JSON string
JSON.parse() = Converts a JSON string to a JS object
*/


//JSON.stringify()


//names array
// const names = ["Spongebob", "Patrick", "Sandy", "Squidward"];
// const jsonString = JSON.stringify(names);
// console.log(names);
// console.log(jsonString);


//person object
// const person = {
//   "name": "Spongebob",
//   "age": 30,
//   "isEmployed": true,
//   "hobbies": ["jellyfishing", "karate", "cooking"]
// };
// const jsonString = JSON.stringify(person);
// console.log(person);
// console.log(jsonString);


//people array of objects
// const people = [{
//   "name": "Spongebob",
//   "age": 30,
//   "isEmployed": true
// },
// {
//   "name": "Patrick",
//   "age": 34,
//   "isEmployed": false
// },
// {
//   "name": "Squidward",
//   "age": 50,
//   "isEmployed": true
// },
// {
//   "name": "Sandy",
//   "age": 27,
//   "isEmployed": false
// }];
// const jsonString = JSON.stringify(people);
// console.log(people);
// console.log(jsonString);


//JSON.parse()


// const jsonPeople = `[{
//   "name": "Spongebob",
//   "age": 30,
//   "isEmployed": true
// },
// {
//   "name": "Patrick",
//   "age": 34,
//   "isEmployed": false
// },
// {
//   "name": "Squidward",
//   "age": 50,
//   "isEmployed": true
// },
// {
//   "name": "Sandy",
//   "age": 27,
//   "isEmployed": false
// }]`;

// const jsonNames = `["Spongebob", "Patrick", "Sandy", "Squidward"]`;

// const jsonPerson = `{
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true,
//     "hobbies": ["jellyfishing", "karate", "cooking"]
// }`;

// const parsedName = JSON.parse(jsonNames);
// const parsedPeople = JSON.parse(jsonPeople);
// const parsedPerson = JSON.parse(jsonPerson);
// console.log(parsedName);
// console.log(parsedPeople);
// console.log(parsedPerson);


fetch("person.json").then(response => response.json()).then(value => console.log(value));

fetch("names.json").then(response => response.json()).then(value => console.log(value));

// fetch("people.json").then(response => response.json()).then(value => console.log(value));

fetch("people.json").then(response => response.json()).then(values => values.forEach(value => console.log(value))).catch(error => console.error(error));

fetch("people.json").then(response => response.json()).then(values => values.forEach(value => console.log(value.name)));




