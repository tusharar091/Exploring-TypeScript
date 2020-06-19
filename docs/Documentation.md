# Programming Fundamentals with Typescript


>## Getting Started

>### What is [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)?

You must be wondering why are we talking about javascript in here, well if you know nothing about javascript you can't proceed with typescript. **I don't know you might :-p** 
Because as 'Microsoft' states :-

* " [Typescript](https://www.typescriptlang.org/docs/home.html) is a *flavor* or *variant* of [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) "
* " [Typescript](https://www.staging-typescript.org/docs/home)  is a *compiled superset* of [Javascript](https://javascript.info/) "
* " [Typescript](https://www.tutorialsteacher.com/typescript) is an *open-source language* which builds on [Javascript](https://www.w3schools.com/js/) by adding *types* ".

We will try to decode these statements as we proceed with the documentation. So let's dive into *What is Javascript?*

Javascript is a scripting language which doesn't require compiler to be compiled and can be directly included in form of script and is interpreted by the *Interpreter* or *Runtime Environment* included in the browser or in environment like *Node.js* also known as *Javascript Execution Engine* i.e. it is *just-in-time-compiled* aka *Compilation at Runtime*.

It is very easy to embed any javascript file along with html so as to run it on browser like this using script tag :- 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concatenating StrNum</title>
    <script src="ConcatStrNum.js"></script>
</head>

<body>

</body>

</html>
```
or you can run in node environment like this using command line.
```javascript
node ConcatStrNum.js
```

JS started with web browsers in form of short scripts used to make static web pages. Even these short snippets were executed slowly by the browsers because of slow execution engines.

Over the time, it evolved with more support in form of external *Web API's* and with enhanced execution engines provided by web browsers(). As JS evolved it was not only used at the client side for making dynamic web pages with interactive UI, but it evolved on the server side with libraries like *Node.js*.

Enough history, let's now try to implement a function in javascript 

```javascript
/**
 * This function concat given string with a number
 * @param str :- String value required for concatenation
 * @param num :- Number value required for concatenation
 * @returns Concatenated string "str"+"num";
 */
function concatStringWithNum(str,num){
    return str+num;
}
var concatenatedStr=concatStringWithNum("Hi, I am CR",7);
console.log(concatenatedStr);

[Output] Hi, I am CR7
```
So this function is much easier to implement as compared to some languages like C/C++ as we're overloading "+" operator to concat string with number and result of overloading is a combined string *concatenated*.

So you can see Javascript is easy to implement, easy to use but it includes a number of quirks. For Ex:-

What will happen if above functions get called like this :-
```Javascript
function concatStringWithNum(str,num){
    return str+num;
}
var num;
var concatenatedStr=concatStringWithNum("Hi, I am CR",num);
console.log(concatenatedStr);

[Output] Hi, I am CRundefined
```
Where did that undefined came from, let's roll back<br>
So yeah I did a mistake.

I declared the **var num** but left it undefined;
```Javascript
var num; //undefined
```
Ok I accept my mistake, but why JS allowed me this :-

```Javascript
var num; //undefined
var concatenatedStr=concatStringWithNum("Hi, I am CR",num);
```
How can I pass undefined to a function where required parameter is number?

To understand this , think of a parameter as a variable that will be passed whenever you call this function. 

Since, JS is *weakly typed* language it doesn't matter how you used/declared or defined your variable , because of weakly typed nature javascript will ignore the type you used to define it.
Variables in JS can take many shapes([Data Types](https://javascript.info/types)) :- 

It is valid to reassign a different value other than a number to our **var num**

So, 
```Javascript
var num=7
```
can be reassigned to this,
```Javascript
num = "string" //Valid
```
or this
```Javascript
num = {} //Valid 
num = [] //Valid
num = undefined //Valid
num = null //Valid
num = false //Valid
```
So you got the point ,While other strictly typed languages may produce the error, Javascript allows us to pass a different type of parameter other than a number because it doesn't know that we are using **num** as a number in our function definition.

And this doesn't end here , kudos to following quirks :-

```Javascript
console.log([]+[]) = ""
console.log("Hello"+ undefined) = "Helloundefined";
console.log(false+[])= "false"
console.log("123"-1= 122)

console.log([]=="") = true
console.log(0=="")  = true
```
These quirks might look cool and gives you some flexibility, but think you wrote a function to sort an array of numbers and received an array of strings, psshhhh!!🔥🔥🔥

So , JS is cool, easier to write, flexible, even these quirks can be managed with proper checks implemented but when writing tons of lines of code, these quirks might annoy by making your application more susceptible to errors which you can only detect at run-time and believe me it takes a lot of time to debug those. 😭😭

MeanWhile Typescript (Screams) :- "Let me Come"













