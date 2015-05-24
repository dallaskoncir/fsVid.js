#fsVid - A simple jQuery plugin for full screen background videos with automatically generated poster images

##What is fsVid.js?

fsVid.js is a super lightweight jQuery plugin that will allow you to add a full screen video background to your site easily. **Alright, great but why should I use this instead of any of the other plugins out there?** On top of the fact that it is lightweight and responsive, I added a little trick that will take the first frame of your video and use that as the poster image. No screenshots! No Extra set up!

##How to use fsVid.js

1.  Clone the repo or download the zip file.
2.  If you haven't already, grab a copy of jQuery and link that in your html document. Otherwise skip to step 3.
3.  Link popcorn.js, popcorn.capture.js and fsVid.min.js in your html document. Be sure to load them after jQuery and in that order.
4.  Link to the css/fsVid.css file in the head of your html document or @import the css/fsVid.css file in your main CSS file.
5.  In your custom javascript file, call the plugin:
<pre>$(function() {<br /><span class="tab">$('video').fsVid();</span><br />});</pre>
6.  Add your html markup, here is an example:
<pre><span><</span><span>section</span> <span>class=</span><span>"video"</span><span>></span><br /><span class="tab"><</span><span>video></span><br /><span class="tab2"><</span><span>source </span><span>src="your-video.webm" type="video/webm"></span><br /><span class="tab2"><</span><span>source </span><span>src="your-video.mp4" type="video/mp4"></span><br /><span class="tab"><</span><span>/video></span><br /><span><</span><span>/section></span></pre>

###That's it! Now you have a full screen background video for your website!

##Options

Here are the available options for fsVid.js **(default options are in bold)**: