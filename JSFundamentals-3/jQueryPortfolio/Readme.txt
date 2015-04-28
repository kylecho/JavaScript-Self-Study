Goal: Make a platform for all species to leverage the power of social media.

Step 1: Create the browse profile section. This should look like Billy. Here is the HTML snippet:

<div class="thumbnail">
    <img src="http://placekitten.com/200/200"
    <div class="caption">
        <h3>Billy</h3>
        <p> Meow! </p>
    <p><a href="#" class="btn btn-primary" role="button">Befriend</a></p>
  </div>
</div>


create a function that takes an img url and returns an <img> tag with the appropriate src
  input: "http://placekitten.com/200/300"
  output: <img src="http://placekitten.com/200/300"/>
  
write a function that takes two strings, one for the name and the second for the caption. The output
should be the caption div (don't forget the add the button!):

    <div class="caption">
        <h3>Billy</h3>
        <p> Meow! </p>
    <p><a href="#" class="btn btn-primary" role="button">Button</a></p>
  </div>
  
write a function that uses the previous two functions to make the final element and appends it
to the #first div: 

<div class="thumbnail">
    <img src="http://placekitten.com/200/200"
    <div class="caption">
        <h3>Billy</h3>
        <p> Meow! </p>
    <p><a href="#" class="btn btn-primary" role="button">Befriend</a></p>
  </div>
</div>


Using the data in data.js, add a caption property to each object in the results array. 

Then populate the previous element with data.

Append the first 3 animals to #first div

Append the last 3 animals to #second div
------

Step 2: Change 'Furbook Dashboard' to say your name by hooking it up to the text input and button

add an animation to the text (i.e. fadeIn)

------

Step 3: Set up the Befriend button

Use HTML to create a section on your page for your friendlist

When you click on the Befriend button, add that animal, with the picture to the list.

------

BONUS Section

Prettify your app!

Create an 'unfriend' functionality

Make your profile page more customizable. 

Set up the tabs to work (they are boostrap!)