  # Overview of HTML
  HTML is the standard markup language for creating web pages and web applications. It stands for Hyper Text Markup Language.

  Example code:
  html

  <!DOCTYPE html>

  <html>
    
  <head>
    
    <title>My First Web Page</title>
    
  </head>
  <body>

    <p>This is a paragraph.</p>
    
  </body>
  </html>

  CSS Fundamentals: Creating Style Sheet
  CSS (Cascading Style Sheets) is used to style the presentation of a document written in HTML.

  Example code:


  /* style.css */
  body {

    background-color: lightblue;
    
  }

  h1 {
    color: navy;
  }
  <h1>CSS Box Model</h1>

  <p></p>The CSS box model is a box that wraps around every HTML element. It consists of margins, borders, padding, and the actual content.

  Example code:


  /* style.css */
  .box {
    width: 200px;
    
    padding: 20px;
    
    border: 1px solid black;
    
    margin: 10px;
    
  }</p
  <h1>Introduction to JavaScript</h1>
  JavaScript is a programming language that enables interactive web pages and is an essential part of web development.

  Example code:

  <h3>javascript</h3>

  // script.js
  console.log('Hello, World!');

  Working with Web Forms and Validating User Input
  Web forms are used to collect user input, and JavaScript can be used to validate and process the input.

  Example code:

  html
  Copy
  <form>
    <input type="text" id="username">
    <input type="submit" onclick="validateForm()">
  </form>
  <script>
  function validateForm() {
    var username = document.getElementById('username').value;
    if (username === '') {
      alert('Username must be filled out');
      return false;
    }
  }
  </script>

  <h2>JavaScript Functions and Events</h2>
  JavaScript functions are blocks of code that can be called and executed. Events are actions that occur on web pages, such as clicks or keypresses.

  Example code:

  javascript
  Copy
  // script.js
  function greet() {
    alert('Hello, World!');
  }

  document.getElementById('myButton').addEventListener('click', greet);
  JavaScript Timing Events
  JavaScript provides timing events such as setTimeout and setInterval to execute code at specific intervals.

  Example code:

  javascript
  Copy
  // script.js
  setTimeout(function() {
    alert('This message will appear after 3 seconds');
  }, 3000);
  JavaScript Image Slideshow
  JavaScript can be used to create image slideshows on web pages by manipulating the DOM and handling events.

  Example code:

  html
  Copy
  <div class="slideshow">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
  </div>
  <script>
  var index = 0;
  var images = document.querySelectorAll('.slideshow img');
  function nextSlide() {
    images[index].style.display = 'none';
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
  }
  setInterval(nextSlide, 2000);
  </script>

  <h1>Recursive Function in JavaScript</h1>
  A recursive function is a function that calls itself to solve a problem. It's commonly used for tasks that can be broken down into smaller, similar tasks.

  Example code:

  // Calculate factorial using recursion
  function factorial(n) {

    if (n === 0 || n === 1) {
      return 1;
    } else {
    
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5)); // Output: 120
  Error Handling in JavaScript
  JavaScript provides mechanisms for handling errors, such as try...catch blocks, to gracefully manage unexpected situations.

  Example code:

  // Error handling with try...catch
  try {

    // Code that may throw an error
    var x = y + 1; // y is not defined
    
  } catch (error) {

    console.log('An error occurred: ' + error);
  }


    # Working with jQuery and JSON

  ## Basics of jQuery
  jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler with an easy-to-use API that works across a multitude of browsers.

  ```javascript
  // Example of using jQuery to hide an element
  $(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
  });
```
``` // Example of using jQuery to handle a click event
$("button").click(function(){
  $("p").hide();
});
```
```
<!-- Example of using jQuery from a CDN -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```
// Example of using a jQuery selector

$("p").hide();
```
```
// Example of using the :input selector

$(":input").css("background-color", "yellow");
```
````
// Example of using a jQuery DOM manipulation method

$("p").append("Some text.");
```
```
  // Example of using a jQuery element```
  
var pElements = $("p");
```

// Example of a JSON array
var colors = ["red", "green", "blue"];
 // Example of a nested JSON object
var employee = {
  "name": "John",
  "age": 30,
  "department": {
    "name": "Engineering",
    "location": "New York"
  }
};
```
// Example of converting a JSON object to a string

var personString = JSON.stringify(person);
```
// Example of converting a string to a JSON object
var personObject = JSON.parse(personString);

```
  # Working with Bootstrap

  ## Introduction to Bootstrap
  Bootstrap is a popular front-end framework for building responsive and mobile-first websites. It provides a collection of CSS and JavaScript components that make it easier to create a modern and user-friendly web design.

  ```html
  <!-- Example of including Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> ```

<h1>Setting up Bootstrap</h1>
To set up Bootstrap, you can include the Bootstrap CSS and JavaScript files in your HTML document, and then start using Bootstrap classes and components in your markup.
 <!-- Example of including Bootstrap JavaScript -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<!-- Example of using Bootstrap grid system -->
<div class="container">
  <div class="row">
    <div class="col-sm-4">Column 1</div>
    <div class="col-sm-4">Column 2</div>
    <div class="col-sm-4">Column 3</div>
  </div>
</div>

<!-- Example of creating an image gallery with Bootstrap -->
<div class="row">
  <div class="col-md-4">
    <img src="image1.jpg" class="img-fluid" alt="Image 1">
  </div>
  <div class="col-md-4">
    <img src="image2.jpg" class="img-fluid" alt="Image 2">
  </div>
  <div class="col-md-4">
    <img src="image3.jpg" class="img-fluid" alt="Image 3">
  </div>
</div>
  <!-- Example of using Bootstrap blockquotes and lists -->
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <footer class="blockquote-footer">Someone famous</footer>
</blockquote>
<ul class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
</ul>

<!-- Example of using Bootstrap table classes -->
<table class="table">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>

<!-- Example of using Bootstrap dropdown -->
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
  </div>
</div>











