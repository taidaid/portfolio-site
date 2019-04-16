# Bryan's Portfolio Site

Welcome to my portfolio site. This was a labor of love made with React, React-Router, React-Bootstrap, React-Transition-Group, React-Textloop, and React-Responsive.
## Challenges
* I wanted to try out React-Bootstrap, but in the end, I decided it will not be a library that I use in the future. Its built-in styling did not give me the freedom I wanted and I found the documentation a bit lacking. I had to dive into the module files themselves in order to see how some of the components work.
* I  created a load animation in the public index.html so that visitors have a loading indicator while waiting and it creates a nice CSS fade animation to fade outt he index.html and fade in the app's home page. The challenge here was that I originally used a .webp image. It wasn't until later that I learned the .webp was made by Google and isn't supported well on Apply products. My solution was to simply change the image to the create-react-app loading SVG image. Converting the .webp into an .apng (animated PNG) made the file too large.
* I had great success with CSS Transitions from React-Transition-Group and React-Router combining to make beautiful page transitions. It did take a little bit of extra legwork to make it look as it does now, particularly with the positioning of the elements as the enter and exit. I had to ensure that they filled the same position and overlapped exactly, for example.
