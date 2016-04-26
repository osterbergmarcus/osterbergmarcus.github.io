---
layout: blog
title:  "Stateless Function Components In React"
date:   2016-02-27 17:00:00
tags: JavaScript React Function Components
---

<i>Stateless presentational components in React</i>
<br/>
<br/>
With <a href="https://facebook.github.io/react/index.html" target="_new">React</a> your UI is built out of 
<strong>reusable components</strong>. It's a modular way of development. In v0.14 <i>Stateless Functions</i> was introduced and lets
you write <strong>Composable components</strong>. Components that are stateless and isolated.
That means that we can write <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.e17aanyhdpresentational" target="_new"> presentational components</a> (basically components that returns good looking divs)
that are pure functions. So no state, lifecycle methods or refs attribute.
<br/>
<br/>
Enough said! Lets see how these <i>Stateless Function Components</i> can be written and used.
<br/>
<br/>
Typical stateful component written with ES6 syntax.
{% highlight JavaScript %}
class Parent extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        text: ''
      }
      this.addText = this.addText.bind(this)
  }
  
  addText(event) {
    this.setState({ text: event.target.value })
  }
    
  render(){
    return (
      <div>
      <h2>Parent: {this.state.text}</h2>
      <Text 
        addText={this.addText}
        text={this.state.text}
      />
      </div>
    )
  }
}
{% endhighlight %}
<br/>
<i>Parent</i> passes down <i>addText</i> method and the state
to our presentational component <i>Text</i>.
<br/>
<br/>
Lets create our <i>stateless function component</i>. <i>If you are using the ES6 way of writing function expressions
remember that the name property will not be set. Which can be a problem for debugging.</i>
{% highlight JavaScript %}
const Text = ({ addText, text }) => {
  return (
    <div>
      <h3>Child: {text}</h3>
      <input
        type="text"
        onChange={(event) => addText(event)}
      />
    </div>
  )
}
{% endhighlight %}
<br/>
<i>Text</i> takes the properties as a parameter passed down from its parent <i>Parent</i>.
<br/>
Could also pass the object <i>props</i> as a parameter
{% highlight JavaScript %}
const Text = (props) => {
  return (
    <div>
      <h3>Child: {props.text}</h3>
      <input
        type="text"
        onChange={(event) => props.addText(event)}
      />
    </div>
  )
}
{% endhighlight %}
<br/>
<br/>
Notice how we dont have to use <i>this</i> keyword because its a function not an object.
<br/>
You can still use Prop Validation on your function component
{% highlight JavaScript %}
Text.propTypes = {
  addText: React.PropTypes.func,
  text: React.PropTypes.string
}

// And default props
Text.defaultProps = { text: 'default text' }
{% endhighlight %}
<br/>
If your presentational component is small you can return your statement in one line
{% highlight JavaScript %}
const Text = ({ addText }) => <input type="text" onChange={(event) => addText(event)} />
{% endhighlight %}
<br/>
<br/>
Stateless function components not only makes your code look cleaner, easier to test but also improves performance.
<br/>
Check out the <a href="http://codepen.io/osterbergmarcus/pen/pyprzm" target="_new">demo</a> to see full example.
<br/>
<br/>
I hope you found this helpful, feel free to share your insights or comments below.
<br/>
<br/>
Enjoy your code.  
