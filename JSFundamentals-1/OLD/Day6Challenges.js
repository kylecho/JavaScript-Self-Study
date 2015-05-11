// Almost correct.. needs review: 3

//write a function that takes two parameters, one, 'arr', is an array
//and the second, 'x', is the number. The function returns
//the first 'x' indices of the array
//firstIndex([1,2,3,4], 3) => [1,2,3]
======================================================================
var firstIndex = function(arr, x) {
  return arr.splice(0, x);
};

// or

var firstIndex = function(arr, x) {
  var result = [];
  for (var i = 0; i < x; i++) {
    result.push(arr[i]);
  }
  return result;
};

//write a function that returns the last elements of an 
//array using the previous function (note: you cannot 
////use slice here!)
//lastIndex([1,2,3,4], 3) => [4,3,2]
======================================================================
var lastIndex = function(arr, x) {
  var result = [];
  for (var i = arr.length - 1; i >= arr.length - x; i--) {
    result.push(arr[i]);
  }
  return result;
};

//write a function that will merge the first object into
//the second object. If the property already exists, on the second
//object, do not overwrite it. 
======================================================================
var obj1 = {one: 1, two: 2, three: 3, four: 4, five: 5},
    obj2 = {three: 4, four: 5, five: 6};

var merge = function(obj1, obj2) {
  var result = {};
  for (var key1 in obj1) {
    result[key1] = obj1[key1];
  }
  for (var key2 in obj2) {
    result[key2] = obj2[key2];
  }
  return result;
};

//rewrite the previous function using _.each
======================================================================
var merge = function(obj1, obj2) {
  var result = {};
  _.each(obj1, function(value, key){
    result[key] = value;
  });
  _.each(obj2, function(value, key){
    result[key] = value;
  });
  return result;
};

//write a function that takes a nested array and returns
//a one dimentional array.
======================================================================
var flatten = function(arrays) {
  return _.reduce(arrays, function(prev, curr) {
    return prev.concat(curr); 
  }, []);
};

//use _.map to change the 'name' property to your name and the 
//'isAwesome' property to true of these objects in this array of 
//objects -
//[
//{loves: 'iceCream' name: 'Billy', isAwesome: false;}
//{loves: 'sandwiches' name: 'Albrey', isAwesome: false;}
//{loves: 'pizza' name: 'Spencer', isAwesome: false;}
//{loves: 'strawberries' name: 'Fred', isAwesome: false;}
//]
======================================================================
var objects = [
{loves: 'iceCream', name: 'Billy', isAwesome: false},
{loves: 'sandwiches', name: 'Albrey', isAwesome: false},
{loves: 'pizza', name: 'Spencer', isAwesome: false},
{loves: 'strawberries', name: 'Fred', isAwesome: false},
];
_.map(objects, function(object) {
  return _.each(object, function(value, key) {
    if (key === 'name') {
      object[key] = 'Kyle';
    } else if (key === 'isAwesome') {
      object[key] = true;
    }
  });
});

//write a function that takes a random number(1-10) of randomly
//generated num inputs (1-10). With those inputs, you add 
//them all together and return the result.

//randomAdder(1,4,7,2) => 14
======================================================================


//generate the random numbers by using this function:
var generateNum = function(){
  return Math.floor(Math.random() * 11);
}

======================================================================
//step 1: create an array of catNames:

var catNames = ['Navi', 'Tom', 'Goyang'];

//step 2: use _.map to loop through the catnames and apply it
//to the CatMaker function. This will return an array of cat objects
var catObj = _.map(catNames, CatMaker)

function CatMaker(name) {
  var owner = "Kyle";
  return {
    speak: function () {
    console.log("Meow my name is " + name +" and my owner is" + owner);
    },
    changeOwner: function(newOwner){
    owner = newOwner;
    }
  };
}

//step 3: use _.each to loop through all the cat objects 
//and call the speak method.
_.each(catObj, function(value, key) {
  if (key === 'speak') {
    catObj[key]();
  }
});

//re-write the makeStopWatch exercise from class yesterday
//without looking (it will be difficult but it will not help you
////if you do not try for at least 20min to do it on your own. 
//////Instead ask for help rather than peek.) 
//Remember, you need to have a function called
//stop watch that you can access outside of the parent function so
//that you can check the number of seconds that have elapsed. 

//now implement it using the module pattern (return an object with
//a method called stopwatch that returns the elapsed time). Now, 
//add another priveleged method that resets the timer and
//another one that pauses the timer and one that restarts the 
//timer after being paused.






