AJAX + JSON

Hackathon stuff
feelings about jQuery?






















===================================================

Storing data in JS: JSON
- Hierarchical key/value pairs.
- Key can be with/without quotes (means same thing)
- Value can be string, number, boolean, or array
- Resembles objects/hash tables/structs of programming languages
- Validate @ JSONLint.com
{
 "firstName": "Jane", 
 "lastName": "Smith", 
 "address": { 
   "streetAddress": "425 2nd Street", 
   "city": "San Francisco", 
   "state": "CA", 
   "postalCode": 94107 
 }, 
 "phoneNumbers": [ 
   "212 732-1234", 
   "646 123-4567" ] 
} 






===================================================

Turning JSON into DOM

{
    "results": [
        {
            "name": "Sheila",
            "img": "http://lorempixel.com/200/210/animals"
        },
        {
            "name": "Albrey",
            "img": "http://lorempixel.com/215/200/animals"
        },
        {
            "name": "Will",
            "img": "http://lorempixel.com/200/215/animals"
        },
        {
            "name": "Spencer",
            "img": "http://lorempixel.com/205/200/animals"
        },
        {
            "name": "Illy",
            "img": "http://lorempixel.com/195/205/animals"
        }
    ]
}














===================================================

Synchronous vs Asynchronous Web























===================================================
jQuery AJAX


$.ajax({type: "GET",
  url: "https://api.parse.com/1/classes/Animal",
  dataType: "json",
  headers: {
    "X-Parse-Application-Id": "tpuMN3TyY1nKxf8KtRqFK8NZ01hI6FJZOT7glBpt",
    "X-Parse-REST-API-Key": "8rqasTc45sPHtj5hSQZ7r498SQM9TXYHFZ9XeniO"
  },
  success: function(data) { console.log(data) }
})




$.ajax({type: "POST",
  url: "https://api.parse.com/1/classes/animals",
  data: "",
  contentType: "application/json",
  headers: {
    "X-Parse-Application-Id": "tpuMN3TyY1nKxf8KtRqFK8NZ01hI6FJZOT7glBpt",
    "X-Parse-REST-API-Key": "8rqasTc45sPHtj5hSQZ7r498SQM9TXYHFZ9XeniO"
  },
  success: function(data) { console.log(data) }
})




===================================================

type: GET, POST, PUT, DELETE























===================================================

url:
























===================================================

data + contentType























===================================================

dataType


























===================================================

headers























===================================================

success


$.ajax({type: "GET",
  url: "https://api.parse.com/1/classes/Animal",
  dataType: "json",
  headers: {
    "X-Parse-Application-Id": "tpuMN3TyY1nKxf8KtRqFK8NZ01hI6FJZOT7glBpt",
    "X-Parse-REST-API-Key": "8rqasTc45sPHtj5hSQZ7r498SQM9TXYHFZ9XeniO"
  },
  success: function(data) { console.log(data) }
})





for(var i = 0; i < data.results.length; i++){
  $.ajax({type: "POST",
  url: "https://api.parse.com/1/classes/animals",
  data: JSON.stringify(data.results[i]);
  contentType: "application/json",
  headers: {
    "X-Parse-Application-Id": "tpuMN3TyY1nKxf8KtRqFK8NZ01hI6FJZOT7glBpt",
    "X-Parse-REST-API-Key": "8rqasTc45sPHtj5hSQZ7r498SQM9TXYHFZ9XeniO"
  },
  success: function(data) { console.log(data) }
})

}









===================================================
error

Cross Domain Policy

http://store.company.com/dir/page.html
OK
http://store.company.com/dir/stuff.html
http://store.company.com/dir/stuff/thing.html
ERROR
https://store.company.com/dir/page.html //fail
http://store.company.com:81/dir/page.html //fail
http://news.company.com/dir/page.html //fail


