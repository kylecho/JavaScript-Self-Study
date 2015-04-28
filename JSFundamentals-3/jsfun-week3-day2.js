docs.jquery.com

===================================================
Events

function onButtonClick() {
  console.log('clicked!');
};

$('#button').on('click', onButtonClick);


$('#button').on('click', function () {
  console.log('clicked!');
});

Keyboard Events 'keydown' 'keypress' 'keyup'
Mouse Events 'click' 'mousedown' 'mouseup' 'mousemove'
Form Events 'change' 'focus' 'blur'

===================================================
preventDefault()

$('a').on('click', function (event) {
  event.preventDefault();
  console.log('Not going there!');
});

$('form').on('submit', function (event) {
  event.preventDefault();
  console.log('Not submitting, time to validate!');
});

===================================================
Custom Events

$("body").on("test", function(){
        alert("test triggered");
    });

$("body").trigger("test");

===================================================
Effects and Animation

$('#error').toggle();

$('#error').fadeIn();

$('#error').show(1000, function(){
  $(this).addClass('redText')
});

===================================================