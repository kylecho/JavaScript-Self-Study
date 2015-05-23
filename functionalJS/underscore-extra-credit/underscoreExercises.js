##Underscore exercises

1. Use _.reduce to multiply all the values in an array.
var multiplyAll = function(array) {
	return _.reduce(array, function(memo, elem){
		return memo * elem;
	});
};

2. Use _.reduce to concatenate all strings in an array.
var concatAll = function(array) {
	return _.reduce(array, function(memo, elem){
		return memo + elem;
	});
};
 
 		input: ['x','y','z']
 		output: 'xyz'

3. Write a function that takes an array of names and congratulates them. Make sure to use _.reduce as part of the function.
var congrats = function(array) {
	return 'Congratulations ' + _.reduce(array, function(memo, elem){ return memo + ', ' + elem; }) + '!'; 
};

		input: ['Steve', 'Sally', 'George', 'Gina']
		output: 'Congratulations Steve, Sally, George, Gina!'

4. _.pluck takes an object and a property name and returns the property name`s value. Write your own version called myPluck.
 
 		var myPluck = function(obj, propName){
 			return obj[propName];
 		};

6. Use _.filter to return all strings in an array that start with the letter 'Z'.
var startsWithZ = function(array) {
	return _.filter(array, function(word){
		if (word[0] === 'z' || word[0] === 'Z') {
			return word;
		}
	});
};

7. Use _.where on your farm animals from the lecture slides to return all animals who contain the value 3 at the property name space.
 
 		input: [ {speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},  
 				{speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},  
 				{speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},  
 				{speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3} ]
 				
 		output: [{speak: function, name: "Tiger3", space: 3},  
 				{speak: function(){}, name: "Tiger4", space: 3}] 

