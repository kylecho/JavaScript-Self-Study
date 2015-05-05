// Needs to do No.3
##Underscore exercises

1. Use _.reduce to multiply all the values in an array.
var myArr = [1, 2, 3];
_.reduce(myArr, function(prev, curr) { return prev + curr; });

2. Use _.reduce to concatenate all strings in an array.
 
 		input: ['x','y','z']
 		output: 'xyz'

_.reduce(input, function(prev, curr) { return prev + curr; });

3. Write a function that takes an array of names and congratulates them. Make sure to use _.reduce as part of the function.
		
		input: ['Steve', 'Sally', 'George', 'Gina']
		output: 'Congratulations Steve, Sally, George, Gina!'

_.reduce(input, function(prev, curr) { return });

4. _.pluck takes an object and a property name and returns the property name''s value. Write your own version called myPluck.
 
 		myPluck = function(obj, propName){
 			//fill in here
 			var result = [];
 			for (var propName in obj) {
 				result.push(obj[propName]);
 			}
 			return result;
 		}
 
6. Use _.filter to return all strings in an array that start with the letter 'Z'.

		// ['Za', 'Xa', 'Ze', 'Ye'].filter(function(elem){ return elem.split('')[0] === 'Z'; });

		_.filter(['Za', 'Xa', 'Ze', 'Ye'], function(elem) {
			return elem.split('')[0] === 'Z';
		});

 
7. Use _.where on your farm animals from the lecture slides to return all animals who contain the value 3 at the property name space.
 
 		input: [ {speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},  
 				{speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},  
 				{speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},  
 				{speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3} ]
 				
 		output: [{speak: function, name: "Tiger3", space: 3},  
 				{speak: function(){}, name: "Tiger4", space: 3}] 
 				
 		_.where(input, {space: 3});

 		
  
