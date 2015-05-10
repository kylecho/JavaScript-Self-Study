//How will the following evaluate
===============================================================
false && true || true // it's same as (false && true) || true, thus returns true.
false && (true || true) // false && true, returning false.
true ? console.log(3) : console.log(2); // 3
false ? console.log(3) : console.log(2); // 2

//Some examples of logical operators in action
===============================================================
if (x > 5 && x < 10)
{
   // action to be performed if x is greater than 5
   // and less than 10
}

//And you might use these while setting up a website
===============================================================
function sayHi(name)
{
   name = name || 'stranger';
   alert('Hi there ' + name);
}

function isAdult(age) {
   return age && age > 17 ;
}



//Write a function that adds up all the numbers from 1 up to,
//but not including num
===============================================================
var sum = function(num) {
	var result = 0;
	for (var i = 0; i < num; i++) {
		result += i;
	}
	return result;
};

//This function will return a number
//[input: 5]
//[output: 10]

//Write a range function that takes a start and an end value
//and returns an array containing all number from start up to
//and including end
==============================================================
var range = function(start, end) {
	var result = [];
	for (var i = start; i <= end; i++) {
		result.push(i);
	}
	return result;
};

//This function will return a number
//[input: 3, 8]
//[output: [3,4,5,6,7,8]]

//Easy stuff right? How about making a function that takes
//two numbers, a base and exponent and returns the result
=============================================================
var power = function(base, exponent) {
	var result = base;
	for (var i = 2; i <= exponent; i++) {
		result *= base;
	}
	return result;
};

//This function will return a number
//[input: 2, 5]
//[output: 32]

//create a function named 'arrayCounter' that takes in a parameter which
// is an array. The function must return the length of an array passed in
// or 0 if a 'string', 'number' or 'undefined' value is passed in.
==============================================================
var arrayCounter = function(array) {
	return (Array.isArray(array)) ? array.length : 0;
};

//[hint: try using logical operators in your function]


//Type conversions
==============================================================
1. Number('3'); // 3
2. String(false); // "false"
3. Boolean([]); // true
4. Object(3); // Number {[[PrimitiveValue]]: 3}


//change func so that it works with the for loop
//with semi colons??
==============================================================
var func = function(){};
for(var i = 0; i < func.length; i++){
  console.log(func[i]);
};


//change obj so that it works with the for loop
//with semi colons
==============================================================
var obj = {};
for(var i = 0; i < func.length; i++){
  console.log(obj[i]);
}


//write a function that changes an object into an array of it's values
==============================================================
var getObjValues = function(obj) {
	var result = [];
	if (typeof obj === 'object') {
		for (var key in obj) {
			result.push(obj[key]);
		}
	}
	return result;
};

//input => {one: 1, two: 2, three: 3, four: 4} 
//output => [1,2,3,4]


//now write a function that takes an object and creates and array of it's 
//properties
==============================================================
var getObjProps = function(obj) {
	var result = [];
	if (typeof obj === 'object') {
		for (var key in obj) {
			result.push(key);
		}
	}
	return result;
};

//input => {one: 1, two: 2, three: 3, four: 4} 
//output => ['one','two', 'three', 'four']


//what is the difference between a side effect of a function and
//what a function returns?
==============================================================
// a side effect means how it affects other variables due to running the function.
// a function return is a value derived from the function.
