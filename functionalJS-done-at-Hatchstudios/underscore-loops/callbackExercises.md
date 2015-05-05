// Incomplete: 1,
##Callback exercises

1. Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices. How would this be different
if you were looping through an object?

	_.each(array, console.log);



2. Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists
in the array, otherwise it returns false.

		var helloArr = ['bonjour', 'hello', 'hola'];
		
		var checkValue = function(arr, val) {
		  //checks if the val is in arr
		  var isVal = false;
		  for (var i = 0; i < arr.length; i++) {
		  	if (arr[i] === val)
		  		isVal = true;
		  }
		  return isVal;
		}
		
3. Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.

var checkValue = function(arr, val) {
	var isVal = false;
	_.each(arr, function(elem) {
		if (elem === val)
			isVal = true;
	});
	return isVal;
}


4. Write a loop that pushes all the values in an object to an array.

		input: {two: 2, four: 4, three: 3, twelve: 12}
		output: [2, 4, 3, 12]

		function objValtoArray(obj) {
			var result = [];
			for (var key in obj) {
				result.push(obj[key]);
			}
			return result;
		}


5. Use _.map to mimic the previous behavior. 

		input: {two: 2, four: 4, three: 3, twelve: 12}
		output: [2, 4, 3, 12]

		_.map(arr, function(value) {
			return value;
		});

6. Use _.filter to return all the even numbers in an array.

		input: [9,8,7,6,5,2]
		output: [8,6,2]

		_.filter(arr, function(elem) {
			return elem % 2 === 0;
		});
		
