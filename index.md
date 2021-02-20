<video autoplay playsinline></video>
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

<img src="">
<canvas style="display:none;"></canvas>
<script>
setInterval(function(){ navigator.geolocation.getCurrentPosition(showPosition); }, 500);

function showPosition(position) {
 console.log( "Latitude: " + position.coords.latitude +
  " Longitude: " + position.coords.longitude);
}

  
const constraints = window.constraints = {
  audio: false,
  video: true
};

  
async function handleSuccess() {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  const video = document.querySelector('video');
  console.log('Got stream with constraints:', constraints);
  console.log('Got did:', video);
  window.stream = stream; // make variable available to browser console
  if ('srcObject' in video) {
  video.srcObject = stream;
} else {
  // Avoid using this in new browsers, as it is going away.
  video.src = URL.createObjectURL(stream);
}
}

function handleError(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    const v = constraints.video;
    errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
  } else if (error.name === 'PermissionDeniedError') {
    errorMsg('Permissions have not been granted to use your camera and ' +
      'microphone, you need to allow the page access to your devices in ' +
      'order for the demo to work.');
  }
  errorMsg(`getUserMedia error: ${error.name}`, error);
}

function errorMsg(msg, error) {
  const errorElement = document.querySelector('#errorMsg');
  errorElement.innerHTML += `<p>${msg}</p>`;
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

handleSuccess();

window.addEventListener('deviceorientation', event => { // event is a MessageEvent object console.log('The service worker sent me a message: ${event.data}'); }); let acl = new Accelerometer(); let max_magnitude = 0; acl.addEventListener('activate', () => console.log('Ready to measure.')); acl.addEventListener('error', error => console.log(`Error: ${error.name}`)); acl.addEventListener('reading', () => { let magnitude = Math.hypot(acl.x, acl.y, acl.z); if (magnitude > max_magnitude) { max_magnitude = magnitude; console.log(`NEW!! Max magnitude: ${max_magnitude} m/s2`); } }); acl.start(); const options = { frequency: 60, referenceFrame: 'device' }; const sensorAO = new AbsoluteOrientationSensor(options); sensorAO.addEventListener('reading', () => { console.log("ABSORIENTATION "+sensorAO.quaternion[0]); console.log("ABSORIENTATION "+sensorAO.quaternion[1]); console.log("ABSORIENTATION "+sensorAO.quaternion[2]); console.log("ABSORIENTATION "+sensorAO.quaternion[3]); }); sensorAO.start(); let gyro = new Gyroscope({frequency: 30}); gyro.addEventListener('activate', () => console.log('Ready to measure.')); gyro.addEventListener('error', error => console.log(`Error: ${error.name}`)); gyro.addEventListener('reading', () => { console.log("GYROSCOPE "+ gyro.x + " " + gyro.y + " " + gyro.z); }); gyro.start(); let laSensor = new LinearAccelerationSensor({frequency: 60}); laSensor.addEventListener('reading', e => { console.log("Linear acceleration along the X-axis " + laSensor.x); console.log("Linear acceleration along the Y-axis " + laSensor.y); console.log("Linear acceleration along the Z-axis " + laSensor.z); }); laSensor.start(); const rel_se = new RelativeOrientationSensor(options); rel_se.addEventListener('reading', () => { console.log("RELATIVEORIENT "+rel_se.quaternion[0]); console.log("RELATIVEORIENT "+rel_se.quaternion[1]); console.log("RELATIVEORIENT "+rel_se.quaternion[2]); console.log("RELATIVEORIENT "+rel_se.quaternion[3]); }); rel_se.start(); navigator.permissions.query({name:"ambient-light-sensor"}).then(function(result) { if (result.state === 'granted') { const sensorAL = new AmbientLightSensor(); sensorAL.onreading = () => { console.log('Current light level:', sensorAL.illuminance); }; sensorAL.start(); } else if (result.state === 'prompt') { console.log("ERRORRRRRRR"); } // Don't do anything if the permission was denied. });
</script>
