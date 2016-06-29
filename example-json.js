var person = {
	name: 'Ivan',
	age: 20,
	hobbies: ['coding', 'sports']
};

var personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(typeof personObject);

var animal = '{"name": "ken"}';
console.log(animal);
console.log(typeof animal);

var animalObject = JSON.parse(animal);
animalObject.age = 2;
console.log(animalObject);
console.log(typeof animalObject);

animal = JSON.stringify(animalObject);
console.log(animal);
