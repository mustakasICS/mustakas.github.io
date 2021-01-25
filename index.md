## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/mustakasICS/mustakas.github.io/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/mustakasICS/mustakas.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
<html>
<head>
  
<script>
 navigator.permissions.query({ name: 'accelerometer' }).then(result => {
if (result.state === 'denied') {
console.log('Permission to use accelerometer sensor is denied.');
return;
}

let acl = new Accelerometer({frequency: 30});
let max_magnitude = 0;
acl.addEventListener('activate', () => console.log('Ready to measure.'));
acl.addEventListener('error', error => console.log(`Error: ${error.name}`));
acl.addEventListener('reading', () => {
let magnitude = Math.hypot(acl.x, acl.y, acl.z);
if (magnitude > max_magnitude) {
max_magnitude = magnitude;
console.log(`Max magnitude: ${max_magnitude} m/s2`);
}
});
acl.start();
});
// we check if the browser supports ServiceWorkers
if ('serviceWorker' in navigator) {
  navigator
    .serviceWorker
    .register(
      // path to the service worker file
      '/sw.js'
    )
    // the registration is async and it returns a promise
    .then(function (reg) {
      console.log('Registration Successful');
    });
    navigator.serviceWorker.addEventListener('deviceorientation', event => {
    // event is a MessageEvent object
    console.log('The service worker sent me a message: ${event.data}');
  });
}
</script>
</head>
<body>
</body>
</html>
