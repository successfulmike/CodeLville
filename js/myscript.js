console.log("Hello myscript.js");

//var ticker = prompt("Enter ticker");

/*for (var cnt=1;cnt<=100;cnt++) {
	if ((cnt % 3 == 0) && (cnt % 5 == 0)) {
		console.log("fizzbuzz");
	} else if (cnt % 3 == 0) {
		console.log("fizz");
	} else if (cnt % 5 == 0) {
		console.log("buzz");	
		} else {
		console.log(cnt);
		}
}*/

//Array
/*
var array = ["mike","bob","jessie"];
console.log(array);
console.log(array.length);

for(var cnty = 0;cnty<array.length;cnty++) {
console.log(array[cnty]);
}
*/

//Objects
/* 
var me = { 
	first_name: "Mike",
	last_name: "Patterson",
	"my address": "here"
}

console.log(me.first_name + " " + me.last_name);
console.log(me["my address"]);

var key = "first_name";
console.log(me[key]);
*/

//Functions
/*
var sayHey = function() {
	var msg = "Hey";
	msg += " there";
	console.log(msg);
}

var debug = function(msg) {
	console.log("debug", msg);
}

var dblNmbr = function(num) {
	return num * 2;
}

debug(dblNmbr(450));

sayHey();


var x = 1;
debug("x was set");

sayHey();

x += 10;
var y = 100;

sayHey();
debug("x increase y set");

sayHey();

//function to print odd if first number is such
var mine = function(a, b, c) {
	if (a % 2 == 0) {
		return "even";
	} else {
		return	"odd";
	}
}

console.log("your first number is ",mine(11,4,6));
*/


var color = "red";

var divp = document.getElementById('para');

divp.style.background = "lightblue";
divp.style.color = color;

var myvar;

console.log(typeof myvar === "undefined");
console.log(myvar === undefined);

var x = null;

//strict method of checking null of undefined
if(myvar === null) {
	console.log("if");
} else {
	console.log("else");
}

var world = "world";

function sayHello() {
	var hello = "Hello ";

	function inner() {
		var extra = " and universe";

		function innest() {
			var evenmore = ". It's all God's";	
			console.log(hello + world + extra + evenmore);	
		}
		innest();
		
	}

	inner();
}

sayHello();

//Shadowing (variables with same name diff scope)
/*var mycolor = "blue";

console.log("my color before myFunc()", mycolor);

function myFunc() {
	var mycolor = "yellow"
	myNumber = 42;
	console.log("my color inside myFunc()", mycolor);
}
myFunc();

console.log("my color after myFunc()", mycolor);
console.log("myNumber after myFunc()", myNumber);*/

//Hoisting
/*function doSomething (doit) {
	var color = "blue",number,name="Mike";
	if(doit) {
		var color = "red";
		console.log("Color in if(){}", color, name);
	}
	console.log("Color in if(){}", color);
}

doSomething(false);
doSomething(true);*/

//Strings
/*var name="Mike";
console.log(name);

var stat = 'He said "Awesome! Mike\'s statement"';
console.log(stat);

var length = stat.length;
console.log(length);

var index = stat.indexOf("said");
console.log(index);

if (stat.indexOf("s") !== -1) {
	console.log("s exist in string");
} else{
	console.log("s doesn't exist in string");
}

console.log(stat.charAt(1));

var st = stat.substr(0,10);
console.log(st);
*/
var first = "Hello"
var snd = "hello"

if(first === snd) {
	console.log("these strings are equal");
} else {
	console.log("these are different");
}

function compare(a, b) {
	console.log(a + " < " + b, a < b);
}

compare("a", "b");
compare("a","A"); //check ASCII table to see decimal equivalent
compare("banana","bananas");


