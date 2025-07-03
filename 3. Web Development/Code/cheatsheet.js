// Variables
var age;
var name = "John";
age = 25;

//Conditions
if (age > 18) {
  console.log("You are an adult!");
}
else {
  console.log("You are a minor!");
}   
 
//Switch
switch (name) { 
    case "John": 
        console.log("Hello John!");
    break;
    case "Jane": 
        console.log("Hello Jane!");
    break;
    default: 
        console.log("Hello!");
}  

//For loop
for (var i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

//While loop
while (i < 10) {
  console.log("The number is " + i);
  i++;
}

//Functions
function myFunction() {
    console.log("Hello World!");
}

function add(a, b) {
    return a + b;
}

var x = add(5, 3);
var string = add("Hello", "World");

//Objects
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getName = function() {
        return this.make + " " + this.model + " " + this.year;
    }
}

var myCar = new Car("Ford", "Mustang", 1969);
alert(myCar.getName());

//Prototype
Car.prototype.color = "Red";

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.getName = function() {    
    return this.make + " " + this.model + " " + this.year;
}

//Self-invoking function
(function() {
    console.log("Hello World!");
})();

//Array
var cars = ["Saab", "Volvo", "BMW"];
var = new Array("Saab", "Volvo", "BMW");

//Date
var d = new Date(); 
var d = new Date(2018, 11, 24, 10, 33, 30, 0);

//Error 
throw new Error("Something went wrong");

//API DOM

//Element Selection
document.getElementById("id"); // Selects a single element by its ID.
document.getElementsByTagName("tagname"); // Selects a list of elements that match the given tag name.

//Working with Element Collections
//This example demonstrates how to iterate over a collection of elements, such as images, and perform actions like creating a list of their sources.
var imgSet = document.getElementsByTagName("img");   
var output = "";
for (var i = 0; i < imgSet.length; i++) {
    output += "<p>Source for image";
    output += i;
    output += "; ";
    output += imgSet[i].src;
    output += "</p>";
}
document.write(output);

//Creating and Modifying Elements
document.createElement("tagname"); // Creates a new element of the specified tag type.
//This example shows how to create a new paragraph element, add text to it, and append it to an existing element identified by its ID.
function addPara() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
}

//Modifying Element Content and Style
var element = document.getElementById("div1");
element.innerHTML = "New text!"; // Changes the HTML content of an element.
element.style.color = "blue"; // Changes the style of an element directly.
element.setAttribute("style", "color: blue;"); // Sets an attribute of an element.
element.removeAttribute("style"); // Removes an attribute from an element.
element.getAttribute("style"); // Retrieves the value of an element's attribute.

//Window and Navigation
window.open("http://www.google.com", "_blank", "width=200, height=100"); // Opens a new window with specified dimensions.
window.onload = function() { alert("Hello World!"); } // Executes code after the window has finished loading.
window.scrollTo(0, 100); // Scrolls the window to a specific position.
window.close(); // Closes the current window. Note: This only works for windows that were opened by JavaScript.


//Client-Side JavaScipt: with HTML
<script>
    // Javascript code goes here
</script>

<script src="myscripts.js"></script>

<noscript>
    This page requires JavaScript to be enabled.
</noscript>

onload="myFunction()" // Executes code after the window has finished loading.
onclick="myFunction()" // Executes code when a user clicks on an element.
onmouseover="myFunction()"  // Executes code when a user moves the mouse over an element.
onfocus="myFunction()" // Executes code when an element gets focus.
onkeyup="myFunction()" // Executes code when a user releases a key.
onsubmit="myFunction()" // Executes code when a form is submitted.
onselect="myFunction()" // Executes code when a user selects some text.

//Client-Side JavaScipt: with DOM
window.alert("Hello World!"); // Displays an alert box with a message and an OK button.
window.confirm("Are you sure?"); // Displays a dialog box with a message and an OK and Cancel button.
window.prompt("Please enter your name", "John Doe"); // Displays a dialog box that prompts the user for input.  
