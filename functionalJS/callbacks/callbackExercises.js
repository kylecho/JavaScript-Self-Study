#Callback Exercises

1. Write a function, `funcCaller`, that takes a `func` (a function) and an `arg` (any data type). The function
 returns the `func` called with `arg`(as an argument).
==============================================================================================================
var funcCaller = function(func, arg) {
	return func(arg);
};


1. Write a function, `firstVal`, that takes an array, `arr`, and a function, `func`, and calls `func` with the
 first index of the `arr`, the index # and the whole array.
==============================================================================================================
var firstVal = function(arr, func) {
	return func(arr[0], i, arr);
};

1. Change `firstVal` to work not only with arrays but also objects. Since objects are not ordered, you can use
 any key-value pair on the object.
==============================================================================================================
var firstVal = function(collection, func) {
	if (Array.isArray(collection)) {
		return func(collection[0], i, collection);
	} else {
		return func(collection[Object.keys(collection)[0]], i, collection);
	}
}

1. [Extra Credit] Write a function, `once`, (see: http://underscorejs.org/#once) that takes a function and 
returns a version of that function which can only be called once. [Hint: you need a closure]
You probably don't want to be able to double charge someone's credit card. Here is an example of how to use it:
==============================================================================================================
    var chargeCreditCard = function(num, price){
      //charges credit card for a certain price
    };
    var processPaymentOnce = once(chargeCreditCard);
    processPaymentOnce(123456789012, 200);

var once = function(func) {
	var called = false;
	return function(){
		if (!called) {
			called = true;
			return func();
		} else {
			return false;
		}
	};
}
