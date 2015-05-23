##Callback exercises

1. Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices.
How would this be different if you were looping through an object?

_.each(array, function(elem, i){
	console.log("value is :" + elem);
});

_.each(array, function(elem, i){
	console.log("index is :" + i);
});

2. Write a function called checkValue that searches an array for a value. It takes an array and a value and
returns true if the value exists in the array, otherwise it returns false.

var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
  //checks if the val is in arr
  return _.some(arr, function(elem){
  	return elem === val;
  });
};

3. Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.
// not working why?
var checkValue = function(array, value) {
	_.each(array, function(elem){
		if (elem === value) {
			return true;
		}
	});
	return false;
};

// this works
var checkValue = function(array, value) {
	var result = false;
	_.each(array, function(elem){
		if (elem === value) {
			result = true;
		}
	});
	return result;
};

4. Write a loop that pushes all the values in an object to an array.

		var input = {two: 2, four: 4, three: 3, twelve: 12};
		output: [2, 4, 3, 12]

var myArr = [];
for (var key in input) {
	myArr.push(input[key]);
}

5. Use _.map to mimic the previous behavior. 

		input: {two: 2, four: 4, three: 3, twelve: 12}
		output: [2, 4, 3, 12]

var myArr = _.map(input, function(value){
	return value;
});

6. Use _.filter to return all the even numbers in an array.

		input: [9,8,7,6,5,2]
		output: [8,6,2]

var myArr = _.filter(input, function(e){ return e % 2 === 0 });
		
