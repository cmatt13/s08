/*
  Mini-Activity:
	Create an object that describes your favorite movie/video game:
		-With key value pairs:
			title: <value>
			publisher: <value>/producer: <value>
			year: <value>,
			price: <value>/director: <value>
			isAvailable: <value>
      
  Screenshot your solution code-based and the output and paste to our lecture canvas account
*/
/*
   Object is similar to an array since it also contains multiple values. However, unlike an array that uses indexes, an object uses properties.

   With an object, we can easily give a label to each value

   An object is created through curly brackets {} and key-value pairs

   object literal = {}

   key is also called property of an object and its value is found after the right side of the colon character

   value is an element or an item of an object 
      key : value
*/
const favoriteMovie = {
	title: "Scream VI",
	publisher: "Paramount Pictures",
	year: "2023",
	director: "Tyler Gillett, Matt Bettinelli-Olpin",
	isAvailable: true
};

console.log(favoriteMovie);

// an object can contain another object

let grades = {
	firstName: 'Juan',
	lastName: 'Dela Cruz',
	address: {
		city: 'San Pedro',
		province: 'Laguna'
	}
};

console.log(grades)

// an object can contain arrays

grades = {
	firstName: 'Juan',
	lastName: 'Dela Cruz',
	address: {
		city: 'San Pedro',
		province: 'Laguna'
	},
	emails: ['juandelacruz@sample.com', 'jdelacruz@abc.com'],
};

console.log(grades)

// an object can contain functions

grades = {
	firstName: 'Juan',
	lastName: 'Dela Cruz',
	address: {
		city: 'San Pedro',
		province: 'Laguna'
	},
	emails: ['juandelacruz@sample.com', 'jdelacruz@abc.com'],
	fullName: function(){
		return this.firstName + ' ' + this.lastName // this keyword refers to the properties from within the object
	}
};

console.log(grades.fullName())

let videoGame = {
	title: "Suikoden II",
	publisher: "Konami",
	year: "1997",
	price: 150,
	isAvailable: true
}

console.log(videoGame);
// accessing array items: array[index]
// in an object, key and value together make up the object properties
// accessing object properties: object.property
console.log(videoGame.title);
console.log(videoGame.year);

// re-assogn array items: array[index] = <value/items>

// re-assigning object properties
videoGame.title = "Final Fantasy X";
console.log(videoGame.title);
console.log(videoGame)

videoGame.publisher = 'Square Enix';
console.log(videoGame.publisher)
console.log(videoGame)

// object can not only have primitive values but it can also have arrays and even other objects

let course = {
	title: "Philosophy",
	description: "Learn the values of life.",
	price: 5000,
	isActive: true,
	instructors: ['Mr. Johnson', 'Ms. Smith', 'Mr. Santos']
};

console.log(course)
// access the array inside the course
console.log(course.instructors)
// access the second item inside the instructors array
console.log(course.instructors[1])
// delete Mr. Francis from the array
course.instructors.pop();
console.log(course)

// add another instructor to instructors array in the object
course.instructors.push('Mr. Tomas')
console.log(course.instructors)

// determine if the course has an instructor called Mr. Johnson
let isPresent = course.instructors.includes('Mr. Johnson')
console.log(isPresent)

let instructor = {}
// if you re-assign value to a property that does not exist
// you are able to add a property with a value in our object
instructor.name = 'Crisostomo Ibarra';
console.log(instructor)

/* Mini-Activity 2

let instructor = {}
// if you re-assign value to a property that does not exist
// you are able to add a property with a value in our object
instructor.name = 'Crisostomo Ibarra';
console.log(instructor)

Add properties to our instructor object:
				age - 56
				gender - "Male"
				department - "Humanities"
				courses - array with the following items: "Philosophy 101","Humanities 201"
				isActive - true
				salary: 50000
        
Screenshot your solution code-based and the output and paste to our lecture canvas account
  
  First 1-2 submission without errors --> 100 points
	Second 3-5 submission without errors --> 90 points
	Third 5-10 submission without errors --> 85
	the rest without errors --> 80
	Late submission or submission with error --> 60
*/

instructor.name = 'Crisostomo Ibarra';
instructor.age = 56
instructor.gender = 'Male',
instructor.department = 'Humanities'
instructor.courses = ["Philosophy 101","Humanities 201"]
instructor.isActive = true
instructor.salary = 50000
instructor.address = {
	street: '#1 Maginhawa St.', 
	city: 'Quezon City',
	country: 'Philippines'
}
console.log(instructor)
// access the street property of our instructor's address property
console.log(instructor.address.street)

// Create objects using a constructor function

/*
  Create a reusable function to create several objects with similar data structure

  This is useful for creating multiple instances of objects

  'this' keyword when used in a constructor function will allow us to assign a new object's properties and associating with the values recieved from a constructor function's parameter

  constructors are like blueprints or template to create our objects from
*/

function superHero(name, superPower, powerLevel){
	this.name = name;
	this.superPower = superPower;
	this.powerLevel = powerLevel;
}

let superHero1 = new superHero('Saitama', 'One Punch', 300000)
console.log(superHero1)

let superHero2 = new superHero('Anpan Man', 'bread', 200000)
console.log(superHero2)

/* Mini-Activity 3:


			Create a constructor function able to receive 3 arguments
				-It should be able to receive two strings and a number
				-Using this keyword assign properties:
					name, brand, price
					-assign the parameters as values to each property.

			Create 2 new objects using our constructor.
      
      Screenshot your solution code-based and the output and paste to our lecture canvas account
  
  First 1-2 submission without errors --> 100 points
	Second 3-5 submission without errors --> 90 points
	Third 5-10 submission without errors --> 85
	the rest without errors --> 80
	Late submission or submission with error --> 60
*/

function brand(name, brand, price){
	this.name = name;
	this.brand = brand;
	this.price = price;
}

let brand1 = new brand('LeBron 20', 'Nike', 10000)
console.log(brand1)

let brand2 = new brand('Jordan 34', 'Jordan', 9800)
console.log(brand2)


function laptop(name, brand, price){
	this.name = name;
	this.brand = brand;
	this.price = price;
}

let laptop1 = new laptop('Alienware', 'Dell', 120000);

// without the new keyword we cannot instantiate a new laptop object from out constructor, instead we can only invoke it 
console.log(laptop1)

let laptop2 = new laptop('Inspiron', 'Dell', 23000);
console.log(laptop2)

// We can create objects with a object literals {}
// We can create objects with a constructor function and with the use of the new keyword

/*
   Object Methods 
      - a method is a function which is a property of an object
      - in essence it is still a function, however, it is now associated with an object
      - and to invoke or call the function we have to access the property which contains our function

*/

let person = {
	name: 'Shady',
	talk: function(){
		// when the this keyword is used by a function within an object, it refers to the object where function is
		// console.log(this)
		console.log(`Hi, my name is, what? My name is who? ${this.name}`);
	}
}

person.talk()

let person2 = {
	name: 'Jungkook',
	age: 26,
	address: {
		city: 'Gangnam',
		state: 'Seoul',
		country: 'South Korea',
	},
	friends: ['Jin', 'Jimin', 'Jhope', 'RM', 'V', 'Suga'],
	introduce: function(){
		console.log(`Hi my name is ${this.name}. I am ${this.age} years old. I live in ${this.address.city}, ${this.address.state}, ${this.address.country}, My friends are ${this.friends}`)
	},
	addFriend: function(str){
		console.log(str)
		// add the argument input into the friends array
		this.friends.push(str)
		console.log(`My friends are now ${this.friends}`)
	},
	greet: function(obj){
		//console.log(obj);
		console.log(`Good day, ${obj.name}!`);
	}
    
}

person2.introduce();
person2.addFriend('Thonie');
person2.introduce();
person2.greet(person);

/*  Mini-Activity 4:


				Create a constructor function able to receive 3 arguments
					-It should be able to receive two strings and a number
					-Using the this keyword assign properties:
						name, 
						address, 
						age,
						isGreeted: defaultValue false
						-assign the parameters as values to each property.

				Create 2 new objects using our constructor.
        
        This constructor should be able to create person objects.
        Log the 2 new person objects in the console.
        
  Screenshot your solution code-based and the output and paste to our lecture canvas account
  
  First 1-2 submission without errors --> 100 points
	Second 3-5 submission without errors --> 90 points
	Third 5-10 submission without errors --> 85
	the rest without errors --> 80
	Late submission or submission with error --> 60
*/

function identity(name, address, age){
	this.name = name;
	this.address = address;
	this.age = age;
	this.isGreeted = false;
	this.greet = function(identityToGreet){
		console.log(`Hello! ${identityToGreet.name}`)
		identityToGreet.isGreeted = true;
	}
};

let identity1 = new identity('Bruce Wayne', 'Gotham City', 38)
console.log(identity1)

let identity2 = new identity('Peter Parker', 'Manhattan City',  22)
console.log(identity2)








function Person(name, address, age){
	// this refers to object that will be made
	// adding . name allows to add/design a property/key-value to our object
	// parameter name is assigned as a value
	this.name = name;
	this.address = address;
	this.age = age;
	this.isGreeted = false;
	// We can also add a method in our constructor 
	this.greet = function(personToGreet){
		console.log(`Hello! ${personToGreet.name}`);
		// Can we re-assign the value of the argument's property?
		// YES. person is globale and it was create with the let keyword.
		personToGreet.isGreeted = true;
	}

};

let person3 = new Person('Johnny', 'New York City', 25)

console.log(person3)

let person4 = new Person('Maria', 'Cebu City', 45)
console.log(person4)

person3.greet(person4)
console.log(person4)

