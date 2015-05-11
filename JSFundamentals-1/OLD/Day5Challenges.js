// Almost correct..Review needed: 3

//function exercises with callbacks
===============================================
//Callbacks in JavaScript are functions that are passed as arguments to other functions.
//There's a function called setTimeout(), it takes two arguments
//the first is the function to be performed
//the second is the amount of milliseconds that will elapse
// before the function is called back and run
setTimeout(callback, 5000);
//will run the callback function after 5 seconds
//You can also write setTimeout with anonymous functions
setTimeout(function(){}, 5000);

//lets have fun with callbacks, initialize an array
//called allData
==============================================
var allData = [];
//Write a function called logIt accepts an argument named userData
//if the input is a string, console.log the input
//if the input is an object, console.log the key value pairs
//like so 'key:value'
var logIt = function(userData) {
	if (typeof userData === 'string') {
		console.log(userData);
	} else if (typeof userData === 'object') {
		for (var key in userData) {
			console.log(key + ':' + userData[key]);
		}
	}
};

//now write a function called getInput that takes two args
//options and the callback
//have this function push options into the allData array
//and then run the callback function with options as its only
//argument
var getInput = function(options, callback) {
	allData.push(options);
	logIt(options);
};

// When we call the getInput function, we pass logIt as a parameter.
// So logStuff will be the function that will called back
// (or executed) inside the getInput function

// getInput ({name:"Will", speciality:"Busting a move"}, logIt);
//  name: Will
// speciality: Busting a move

// getInput('cool', logIt);
// cool


==============================================
//Let's do some math stuff
//We've written these functions before so it 
//should be a piece of cake right?
//write a function named range that takes two numbers
//and returns an array of the numbers populated with
//the range from the first to the second
var range = function(start, end) {
	var result = [];
	for (var i = start; i <= end; i++) {
		result.push(i);
	}
	return result;
}

//now create a function called sum that takes an
// array and returns the sum of that array
var sum = function(array) {
	var result = 0;
	array.forEach(function(element){
		return result += element;
	});
	return result;
};

//now chain together sum() and range() so that
//you have a function that calculates the sum of all
// numbers in the range

//So now that we've seen we can chain methods and 
//put use functions as arguments, let's play with
//some arguments
===============================================
sum(range(1, 5));
// => 15
sum(range(3, 17));
// => 150


//function exercises with scope
//What will the value of x be after running f1(); // 'outside'
//What about f2();																// 'inside f2'
================================================
var x = 'outside';
var f1 = function() {
var x = 'inside f1';
};
var f2 = function() {
x = 'inside f2';
};

var name = 'Will';


//write a function that takes a series 
//of arguments and returns an arr

//toArray(1,2,3,4,5,6) => [1,2,3,4,5,6]
=================================================
var toArray = function(args) {
	return Array.prototype.slice.call(arguments);
};


//write a function that return the type of
//the given argument
=================================================
var type = function(value) {
	return typeof value;
};

type({}) => 'object'
type([]) => 'array'
=================================================
//***HARD CHALLENGES BELOW***
=================================================
//write a function called applied that mimics the
//functionality of apply (without the context part)
var applied = function(func, arr) {									// needs to be done
	func.apply(null, arr);
};

//applied(func, [arr]) => func(arr1,arr2,arr3)
=================================================
//write a function called partial that mimics this 
//behavior //TODO: more details											// needs to be done

var fullName = function ( firstName, lastName ) {
  return firstName + ' ' + lastName;
};

var billName = partial( fullName, 'Bill' );

billName( 'Smith' ); // "Bill Smith"
billName( 'Clinton' ); // "Bill Clinton"

=================================================
//write a function that adds the properties of a second
//object to the first one
var extend = function(obj1, obj2) {
	var obj = {};
	for (var key1 in obj1) {
		obj[key1] = obj1[key1];
	}
	for (var key2 in obj2) {
		obj[key2] = obj2[key2];
	}
	return obj;
};


var obj1 = {'first': 1, 'second': 2},
obj2 = {'another': 'one', 'surprise': 'combined'}
extend(obj1, obj2) => {'first': 1, 'second': 2, 'another': 'one', 'surprise': 'combined'}
=================================================
//write a function that takes a function and only
//allows that function to be called once. 
var once = function(func) {
	var called = false;
	return function() {
		if (!called) {
			called = true;
			return func();
		} else {
			return false;
		}
	};
};

var logOnce = once(function(){ console.log('log it one time.') });
logOnce(); // 'log it one time.'
logOnce(); // false
=================================================
//(EXTRA CREDIT)
//write a function that mimics throttle
//Returns a new function that can only be invoked 
//once within milliseconds. 
//Any calls that occur before the allotted 
//time has passed are disregarded. 
//The handler will be invoked at the end of the delay.
var throttle = function(func, time) {
	var called = false;
	return function(){
		if (!called) {
			called = true;
			setTimeout(function(){ called = false; }, time);
			return func();
		} else {
			return false;
		}
	};
};

=================================================
//(EXTRA CREDIT)                                        // needs to be done
//compose(fn1, fn2, ..., fnN)
//Compose multiple functions to create a new function. 
//For example, wu.compose(f, g, h)(x) is equivalent 
//to f(g(h(x))).
var compose = function(fns) {
	return function() {
		return 
	};
};

>>> function square(x) { return x * x; }
>>> function add2(x) { return x + 2; }
>>> wu.compose(square, add2)(5);
49
>>> wu.compose(add2, square)(5);
27

