function f() {
	if (condition) {
		var tmp = ...;
		...
	}
	// tmp still exists here
	// => not what we want
}


If you want to introduce a new scope for the then block, you can define a function
and immediately invoke it. This is a workaround, a simulation of block scoping.

function f() {
	if (condition) {
		(function() { // open block
			var tmp = ...;
			...
		}()); // close block
	}
}

This is a common pattern in JavaScript, called immediately invoked function expression.
IIFE.

(function() { // open IIFE
	// inside IIFE
}());	// close IIFE


Some things to note about an IIFE:
- It is immediately invoked.
- It must be an expression.
	(insde parentheses, there can only be expressions.)
- The trailing semicolon is required.


// IIFE Applications
An IIFE enables you to attach private data to a function. Then you do not have to declare a global variable.
var setValue = function () {
	var prevValue;
	return function (value) { // define setValue
		if (value !== prevValue) {
			console.log('changed: ' + value);
			prevValue = value;
		}
	};
}();

Othe applications
- Avoiding global variables: hiding variables from global space
- Creating fresh environment; aviding sharing
- Keeping global data private to all of a constructor
- Attaching global data to a singleton object
- Attaching global data to a method


// Global variables

//here we are in global scope
var globalVariable = 'xyz';
function f() {
	var localVariable = true;
	function g() {
		var anotherLocalVariable = 123;

		// All variables of surrounded scopes are accessible
		localVariable = false;
		globalVariable = 'abc';
	}
}
// Here we are again in global scope


// Best Practice: Avoid Creating Global Variables
Two disadvantages global variables have
1. Subject to side effects. less robust, less predictable, less reusable.
2. all of the JavaScript on a webpage shares the same global variables. Name clashes can become a problem.

<!-- Do not do this -->
<script>
	// Global scope
	var tmp = generateData();
	processData(tmp);
	persistData(tmp);
</script>

We can use an IIFE to hide it inside a nested scope.
<script>
	(function () { // open IIFE
		var tmp = generateData();
		processData(tmp);
		persistData(tmp);
	})(); // close IIFE
</script>

// The Global Object
> var foo = 'hello';
> this.foo // read global variable
'hello'

> this.bar = 'world'; // create global variable
> bar
'world'

// Lexical (static) dimension: staying connected to your surrounding scope.
function doNTimes(n, action) {
	function doNTimesRec(x) {
		if (x >= 1) {
			action();
			doNTimesRec(x-1);
		}
	}
	doNTimesRec(n);
}

// Closures: Functions Stay Connected to Their Birth Scopes
A closure is a function plus the connection to the scope in which the function was created.
The name stems from the fact that a closure "closes over" the free variables of a function.
A variable is free if it is not declared within the function - that is, if it comes "from outside".

function createInc(startValue) {
	return function (step) {
		startValue += step;
		return startValue;
	};
}

> var inc = createInc(5);
> inc(1)
6
> inc(2)
8


