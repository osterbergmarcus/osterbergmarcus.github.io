---
layout: blog
title:  "JavaScript Closures"
date:   2016-01-17 21:30:00
tags: JavaScript Closures
---

<i>Closures are awesome and confusing</i>
<br/>
<br/>
I want to share how I started to understand <strong>Closures</strong> in JavaScript.
This is a beginner friendly view with a simple example.
Closures is a function wrapped inside of a functions body that has connected to its scope chain e.g. outer variables.

Definition from the book Speaking JavaScript "A closure is a function plus the connection to the scope in which the function was created" -<i>Dr.Axel Rauschmayer</i>

So this is how it could look like
{% highlight JavaScript %}
function newCounter() {
  var counter = 0;
   return function increment() {
    counter += 1;
   }
}

var counter1 = newCounter();
var counter2 = newCounter();

counter1(); // Number of events: 1
counter1(); // Number of events: 2
counter2(); // Number of events: 1
counter1(); // Number of events: 3
{% endhighlight %}

<i>newCounter</i> closes over <i>increment</i>, <i>counter</i> can be referenced to and accessed by <i>increment</i>.

<i>counter1</i> and <i>counter2</i> will keep track of their own value.

<br/>
<br/>
This is a very simple but hopefully a clear perspective of what closures are.
<br/>
There is some really good explanations out there on why closures could be used, If you have some good knowledge or resources please share below.
<br/>
<br/>
Enjoy your code.
