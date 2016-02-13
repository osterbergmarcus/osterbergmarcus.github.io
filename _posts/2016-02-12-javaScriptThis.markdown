---
layout: blog
title:  "JavaScript This"
date:   2016-02-13 15:00:00
tags: JavaScript This ES6
---

<i>What is 'this' referring to in JavaScript</i>
<br/>
<br/>
If you are not aware of how you are using the keyword 'this' inside the scope context. <i>this</i> can give you tons of errors and headache.
<br/>
So let us have a look at some examples of what <i>this</i> is and how we can control it.
<br/>
<br/>
Executing <i>this</i> inside our console would return the global Object <i>Window</i>.
{% highlight JavaScript %}
this; // Window {external: Object, ........}
{% endhighlight %}
<br/>
Lets create a Object called <i>world</i> with a method called <i>display</i> that returns <i>this</i>.
{% highlight JavaScript %}
var world = {
 data: ['denmark', 'germany' ],

 display: function(){
  return this;
 }
};
world.display() // Object {data: Array[2]}
{% endhighlight %}
<br/>
As we can see <i>this</i> is no longer referring to the global <i>Window</i> Object, it's now referring to the enclosing execution context which is the <i>world</i> Object.
<br/>
So now that we know when <i>this</i> is <i>this</i> lets have a look on a more practical example.
{% highlight JavaScript %}
var world = {
  data: ['denmark', 'germany' ],

  display: function() {
    this.data.forEach(function(element){
      console.log(element.toUpperCase());
    });
  }
};
world.display();
->DENMARK
->GERMANY
{% endhighlight %}
<br/>
We can cache <i>this</i> from its surrounding environment and then pass it down the scope chain.
Lets create an array in the global Object, declare <i>that</i> and assign it to <i>this</i>.
{% highlight JavaScript %}
var data = ['canada', 'sweden'];
var that = this;

var world = {
  data: ['denmark', 'germany' ],

//Swap the keyword this.data to that.data in the display method
  display: function() {
    that.data.forEach(function(element){
      console.log(element.toUpperCase());
    });
  }
};
world.display();
->CANADA
->SWEDEN
{% endhighlight %}
<br/>
<br/>
<strong>Introducing <i>function.prototype.bind()</i> and <i>.call()</i></strong>
<br/>
We can bind <i>this</i> inside our <i>display</i> method to reference the global <i>Window</i> Object. Like this.
{% highlight JavaScript %}
var data = ['canada', 'sweden'];

var world = {
  data: ['denmark', 'germany'],

  display: function() {
    this.data.forEach(function(element){
      console.log(element.toUpperCase());
    });
  }.bind(window)
};
world.display();
->CANADA
->SWEDEN
{% endhighlight %}
<br/>
Lets declare a variable and assign it to the <i>display</i> method.
{% highlight JavaScript %}
var foo = world.display;
{% endhighlight %}
<br/>
<i>foo</i> dont know <i>display</i> methods original surrounding context and refer <i>this</i> to the global <i>Window</i> Object instead of <i>world</i>.
{% highlight JavaScript %}
foo();
->CANADA
->SWEDEN
{% endhighlight %}
<br/>
We can provide the original scope for <i>this</i>, by using the <i>.call()</i> method.
{% highlight JavaScript %}
//Provide world as its enclosing scope
foo.call(world)
->DENMARK
->GERMANY
{% endhighlight %}
<br/>
<strong>With Arrow functions in ES6 <i>this</i> is set lexically</strong>
{% highlight JavaScript %}
var data = ['canada', 'sweden'];

var world = {
  data: ['denmark', 'germany' ],

  display: () => {
    this.data.forEach((element) => {
    console.log(element.toUpperCase());
    });
  }
};
world.display();
->CANADA
->SWEDEN
{% endhighlight %}
<br/>
<br/>
This has been a brief introduction to <i>this</i> and its scope references. Can be good to know that working in strict mode or sloppy mode can change <i>this</i> behavior.
<br/>
I hope you found <i>this</i> article helpful and feel free to comment below.
<br/>
<br/>
Enjoy your code.
