//Javascript Objects

// var mainf = function() {
// 	console.log("Hey you there, I'm " + this["fav color"]);
// };
/*
var mike = {
	"name": "Michael",
	"skills": ["dancing","eating","cool"],
	"fav color": "red",
// greet: mainf //or you can declare global function and call within object
	greet: function(name, mood) {
		name = name || "You";//name is name if set or You by default
		mood = mood || "good";

		console.log("Hey there " + name +
					". My name is " + this.name +
					" I'm in a "+ mood + " mood. You?");
	}
};

var mich = {
	"name": "Michelle",
	"fav color": "orange",
	// greet: mainf
	greet: mike.greet //mike's greet function is same as michelle's
};

console.log(mike.name);
console.log(mike["fav color"]);

//Creating methods
//a method is a function that is a method associated with an object
mike.greet();
mich.greet();

var mikeGreet = mike.greet;
mikeGreet(); //"this" loses it's object association without object
mikeGreet.call(mich,"Stephen","bright");//use call to set object context
mikeGreet.apply(mike,["Ryan","Super!"]);//apply takes args like array

var namemood = ["Lisa","down"];
mich.greet.apply(mich,namemood);
*/

//Using Prototypes
/*
var personPrototype = {
	name: 'Anonymous',
	greet: function(name, mood) {
			name = name || "You";//name is name if set or You by default
			mood = mood || "good";

			console.log("Hey there " + name +
						". My name is " + this.name +
						" I'm in a "+ mood + " mood. You?");
		},
	species: 'Homo Sapien'	
};

//constructor function used for creating and initialising object
function Person (name) {
	this.name = name;
}

Person.prototype = personPrototype;

mike = new Person('Mike');//MUST use new infront of constructor functions
rick = new Person('Ricardo');
*/

//Javascript Functions
/*function sayhey(greeting,name) {
	greeting = greeting || "Yo!";
	name = name || "human";
	console.log(greeting + " " + name);

	return name.length;//anything after return is not executed
}

sayhey("Greetings","Earthling");
console.log(sayhey("Greetings","Earthling"));

     
function arrayCounter(arr) {
if (typeof arr === 'undefined') {
    return 0;
} else if (typeof arr === 'string') {
  return 0;
} else if (typeof arr === 'number') {  
  return 0;
} else { 
  return arr.length;
}
}
var test = ["steve","mike"];

console.log(arrayCounter(test));

//function scope
function showColor() {
	var color = 'green';
	shape = 'square';//leaving off var will create global variable
	console.log("show items "+ color +" "+shape);
}

showColor();
console.log("show items "+shape);

//another way to declare and assign function to variable
var myfunction = function () {
	console.log("functions");
}

myfunction();

function calledTwice(targetfunc) {
	targetfunc();
	targetfunc();
}

calledTwice(myfunction);


(
	function () {
	var a,b,c;

	console.log("from anonymous function");
}
)();//placing () around and at end, will make private function execute


//button examples

var button = document.getElementById("action");
var field = document.getElementById("enter");

//first arg in addEventListner is action, then function to perform
button.addEventListener('click',function(){
	console.log('taking action');
});

button.addEventListener('click',function(){
	console.log('taking more action');
//first arg in setAttribute is what to set, then function to perform
	field.setAttribute('value',"hey there!");
});
*/


//Javascript Arrays
var x = ['first','second',['new','array'],function(a){return a * 2}];

console.log('directly from array '+ x[3](2));

var doub = x[3];
console.log('from variable with array function '+doub(2));

//dynamically add to end of array
x[x.length] = 'new member';
console.log(x);
console.log(x.length);

//Array Methods
var arr = [2,3,4];
//pushing values onto end of array
console.log(arr.toString());
//toString helps avoid quirk that executes all code before end of script

arr.push(5);
console.log(arr.toString());
//pop removes last member in array and places it in variable if required
var value = arr.pop();
console.log(value);

var narr = [6,7,8];
narr.unshift(1);
console.log(narr);

narr.shift();
console.log(narr);
//unshift and shift are same like push and pop, but operate from the left 
//of the array

var marr = [10,44,32,100,0,44,3,4];
console.log(marr.toString());

marr.sort(function(a,b){
	//comparing the numbers will sort ascending order
	// return a - b;
	//random sort each time run
	return Math.random() - 0.5;
});
console.log(marr.toString());

var strngarr = ['cat','bear','eagle','zebra','ant'];
console.log(strngarr.toString());

strngarr.sort();
console.log(strngarr.toString());

var tarr = [1,2,3,4,5];
console.log(tarr.toString());

tarr.reverse();//reverse elements in array
console.log(tarr.toString());
//these methods above all CHANGE the values in the array

//these methods below do NOT change values in the array
var x = [1,2,3];
var y = [4,5,6];

var z = x.concat(y);
console.log(z.toString());

var g = ['a','b','c','d','e','f'];
//pull out elements from start index and position BEFORE end index
var t = g.slice(1,4);
console.log(t);

var words = ["these","are","words"];
//place character between each array element
var result = words.join(" ");
console.log(result);

//Splice method allows us to 
var garr = [0,1,2,3,4,5,6];
console.log(garr.toString());

delete garr[2];//removes element but not position in array
console.log(garr.toString());

garr.splice(2,3);//removes element AND position in array
//first arg is start position then how many to remove from there
console.log(garr.toString());

//3rd arg is(are) the elements you want INSERTED in that position
//array will continue to increase to accommodat if multiple items listed
garr.splice(2,0,'a','b','c');//start at 2, remove 0 elements
console.log(garr.toString());


//Window object
//the window and document objects (DOM) are the global scope objects created
//every time a web page is loaded
//visit below site if needing more info on DOM API (IE has diff reference)
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
//4 p's of problem solving 1)preparation 2)plan 3)perform 4)perfection









