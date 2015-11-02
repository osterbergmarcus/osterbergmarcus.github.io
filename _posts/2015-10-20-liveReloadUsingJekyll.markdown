---
layout: blog
title:  "live reload using Jekyll"
date:   2015-10-20 01:43:00
tags: Jekyll LiveReload Guard
---

<i>Hi, and welcome to my first blog post. This site is built using the static site generator <a href="http://www.jekyllrb.com">Jekyll.</a> How to get started with Jekyll is simple, and I could not describe the process better then Jekyll own <a href="http://www.jekyllrb.com/docs/home">documentation</a>.</i>
<br/>
<br/>
I like to automate as much as possible in my life, before I started building this project I figured out <strong>How to get live reload to work with Jekyll</strong> and it's very easy.
<br/>
<br/>
I assume you have Jekyll installed by now.
<br/>
<br/>
Step 1. Open up your Terminal and install the following Gems:
{% highlight ruby %}
~$ gem install guard
~$ gem install guard-jekyll-plus
~$ gem install guard-livereload
{% endhighlight %}
Step 2. Init guard in your project folder
{% highlight ruby %}
~$ guard init
{% endhighlight %}
Step 3. Open up guardfile and add the following lines
{% highlight ruby %}
guard 'jekyll-plus', :serve => true do
  watch /.*/
  ignore /^_site/
end

guard 'livereload' do
  watch /.*/
end
{% endhighlight %}
Step 4. Now you need to install live reload extension for your prefered browser (I'm using <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei">LiveReload</a> for chrome)
<br/>
<br/>
Step 5. Now run guard in your project folder.
{% highlight ruby %}
~$ guard
{% endhighlight %}
This will start the Jekyll server and wait for a browser with live reload capability to connect. You should now see in your terminal that you are connected or waiting for connection and some details about your web server configuration.
<br/>
<strong>Five steps later and you are an automated robot</strong>

If this guide mastered your workflow or destroyed your computer, drop a comment below.
<br/>
Enjoy your code.
