---
layout: blog
title:  "JavaScript Prototypes"
date:   2016-02-04 15:00:00
tags: JavaScript Prototypes
---
<i>Prototypes are scary</i>
<br/>
<br/>
JavaScript is a prototype based language as we all know. Lets deconstruct the definition of prototypes in JavaScript.
<br/>
<br/>
When you start of learning object orientated programing with JavaScript. You will come in contact with prototypes and prototypal inheritance. I will try to make you a little bit more comfortable with this concept.
<br/>
<br/>
A Prototype is a member of an object and can define the inheritance of a instance.
<br/>
Before we create our own prototype. Lets just see a quick example of how we are already dealing with prototypes on daily basis.
<br/>
<br/>
Here's an array
{% highlight JavaScript %}
var x = [1, 2]
{% endhighlight %}
<i>x</i> is an instance of Array. <i>x</i> inherits all prototype properties from Array. So we could for example call Array.prototype.map() function on <i>x</i>
{% highlight JavaScript %}
x.map(function(a) { return a + 1});
//returns
[2, 3]
{% endhighlight %}
<br/>
Lets create our own prototype. For this demonstration we will be using the constructor pattern.
{% highlight JavaScript %}
//Creates a constructor called createCountry
function createCountry(country){
this.country = country;
}
{% endhighlight %}
{% highlight JavaScript %}
//Lets create a country by calling the constructor with the argument of 'Sweden'
var sweden = new World('Sweden')
{% endhighlight %}
{% highlight JavaScript %}
//sweden is now an object with the key value pair of country: 'Sweden',
sweden { country: 'Sweden' }
{% endhighlight %}
<br/>
Now we want <i>sweden</i> to say hello to the world. This is where <strong>prototypes</strong> and the <strong>prototype-chain</strong> comes into play.
{% highlight JavaScript %}
//Lets define our constructor createCountry prototype property
createCountry.prototype.helloWorld = function() {
console.log('I am a country called ' + this.country)
};
{% endhighlight %}
<i>createCountry</i> now has a <i>helloWorld</i> prototype property which represents a function.
<i>sweden</i> is still an object with the key value pair of { country: 'Sweden' } with a prototypal reference of <i>helloWorld</i>.
<br/>
{% highlight JavaScript %}
//Call helloWorld on sweden
sweden.helloWorld()
//returns
'I am a country called Sweden'
{% endhighlight %}
<br/>
The interpreter looks for <i>helloWorld</i>
If no references is found it will start to jump up the prototype chain until the request is satisfied
In this case <i>helloWorld</i> can be related to <i>sweden</i> via the prototype chain.
<br/>
If we now add a new country
{% highlight JavaScript %}
var canada = New createCountry('Canada')
{% endhighlight %}
Same goes for <i>canada</i>, it will inherite the protype properties from createCountry. This is how a prototype and the prototype chain works.
<br/>
<br/>
The concept of prototypes and prototypal inheritance can be more stretched. I hope you found this article helpful. If you have any ideas or examples please share below!
<br/>
<br/>
Enjoy your code.
