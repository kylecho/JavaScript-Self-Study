// All correct!
#Callback Exercises

1. Write a function, `funcCaller`, that takes a `func` (a function) and an `arg` (any data type). The function returns the `func` called
with `arg`(as an argument).

function funcCaller(func, arg) {
	return func(arg);
}

1. Write a function, `firstVal`, that takes an array, `arr`, and a function, `func`, and calls `func` with the first index of the `arr`,
the index # and the whole array.

function firstVal(arr, func) {
	func(arr[0], 0, arr);
}


1. Change `firstVal` to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the
object.

function firstVal(obj, func) {
	var keys = Object.key(obj);
	func(obj[key[0]], key[0], obj);
}

1. [Extra Credit] Write a function, `once`,
(see: underscorejs.org/#once) that takes a function and returns a version of that function which can only be called once.
[Hint: you need a closure]
You probably don't want to be able to double charge someone's credit card. Here is an example of how to use it:
  ```javascript
    var chargeCreditCard = function(num, price){
      //charges credit card for a certain price
      console.log('Your credit card has been successfully charged!');
    };
    var processPaymentOnce = once(chargeCreditCard);
    processPaymentOnce(123456789012, 200);
  ```
function once(func) {
	var done = false;
	return function () {
		if (done) {
			return false;
		} else {
			done = true;
			return func;
		}
	}
}

function once(func) {
	var call = false;
	return function() {
		if (call === false)
			call = true;
			return func();
	}
}

function once (fn) {
  var done = false;
  
  return function () {
    return done ? void 0 : ((done = true), fn.apply(this, arguments))
  }
}

// John's answer to once()
var once = function(func) {
  var called = false;
  return function() {
    if (!called) {
      called = true;
      return func();
    }
  };
};

// https://github.com/johnheroy/functionalJS
==================================================================================================================
// Will work without assining x() to another variable.
-----------------------------------
var once = (function (func) {
    var done = false;
    return function () {
        if (done) {
            return false;
        } else {
            done = true;
            return func;
        }
    };
})();
-----------------------------------
once(console.log(10));
once(add);
// Will work without assigning x() to another variable.
-----------------------------------
var once = (function() {
	var done = false;
    return {
    		once: function(func) {
        	if (done) {
            	return false;
            } else {
            	done = true;
                return func;
            }
        },
        reset: function() {
        	done = false;
        }
    }
})();
-----------------------------------
once.once(add);
once.once(console.log(10));
-----------------------------------
// This one will work with assigning once() to a variable and invoke it with that variable.
-----------------------------------
var once = function(func) {
  var called = false;
  return function() {
    if (!called) {
      called = true;
      return func();
    }
  };
};

var alertYolo = function() {
  alert('yolo');
};
var alertYoloOnce = once(alertYolo);
alertYoloOnce();
alertYoloOnce();



