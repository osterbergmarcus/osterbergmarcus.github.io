---
layout: blog
title:  "JavaScript Higher-order functions"
date:   2016-02-27 17:00:00
tags: JavaScript Higher-order First-class Functions
---

<i>Higher-order functions, what does that even mean.</i>
<br/>
<br/>
JavaScript is a <strong>functional programing language</strong> at least it
has some of the core components from the functional langugage paradigm.
See reference <a href="https://en.wikipedia.org/wiki/Functional_programming" target="_new">Wiki</a>.
<br/>
<br/>
Is it important to know that JavaScript supports Higher-order functions
and treats functions as <i>First-class citizens</i>. We don't have to know computer science to write code.
But we are still exposed to these concepts in our daily JavaScript code
and it's the reason why we can pass functions as arguments, store them in variables,
create functions inside a functions body and return them. 
Just like we do with any other objects like Strings or Arrays.
<br/>
<br/>
<strong>Callback</strong> functions are a big deal of JavaScript. It's a a technique
that allows JavaScript to run asynchronously. Callbacks are a direct result of Higher-order
functions, a function that accepts another function as a parameter.
<br/>
<br/>
The most used example for introducing <strong>callback</strong>
is the <i>setInterval</i> function.
{% highlight JavaScript %}
setInterval(function(){ 
  alert("Stop calling me");
}, 3000);
{% endhighlight %}
<br/>
After three seconds the anonynous function will fire from the callback que and alert the message.
During thoose three seconds our runtime can continue execute other callbacks or events.
<br/>
<br/>
Lets cover some more usage of functions.
{% highlight JavaScript %}
var arr = [1, 2, 3];

var indexFunction = function(changes){
  changes.forEach(function(change){
    console.log('Index of new element is: ' + change.index);
    })
}

Array.observe(arr, indexFunction, ['add'])
 
arr.push(4) // Index of new element is: 3
{% endhighlight %}
<br/>
<i>indexFunction</i> is a function expression that are assigned to a variable and can be invoked on <i>indexFunction</i>. The function takes one parameter
called <i>changes</i>. The function then executes the <i>forEach</i> method on each object in our parameter
and calls an anonymous function as a callback on each object found. Which logs to our console the
<i>index</i> of found objects.
A pretty useless and confusing function so far.
<br/>
<br/>
Then we call the method <i>Array.observe</i> with three parameters:
<li><i>name of our object that we want to observe</i></li>
<li><i>a callback</i></i>
<li><i>an array where we specify what type of changes we want to listen to</i></li>
<br/>
<i>indexFunction</i> is the callback. It's passed in as a parameter just like
any other object. The function will stay in memory and will fire or "Call back" on every new change to <i>arr</i>.
<br/>
<br/>
This is all possible because of how functions gets treated in JavaScript.
<br/>
<br/>
This post was written.
<br/>
{% highlight JavaScript %}
function getTime(){
  return Date()
}

var obj = {
  time: getTime()
}

obj.time // "Sat Feb 27 2016 16:44:34 GMT+0100 (CET)"
{% endhighlight %}
<i>getTime</i> returns a function that return the current time and date. We can then use the <i>getTime</i>
as a value for the property <i>time</i>.
<br/>
<br/>
There is more to functions in JavaScript but we have cleared out some of the concepts and explained why we can treat 
functions in JavaScript the way we do.
<br/>
I hope you found <i>this</i> article helpful and feel free to comment below.
<br/>
<br/>
Enjoy your code.  
