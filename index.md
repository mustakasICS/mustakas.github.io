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
<video autoplay></video>
<script>
function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}
if (hasGetUserMedia()) {
const vgaConstraints = {
  video: { width: { exact: 640 }, height: { exact: 480 } },
};
const videoElement = document.querySelector("video");
const audioSelect = document.querySelector("select#audioSource");
const videoSelect = document.querySelector("select#videoSource");

navigator.mediaDevices
  .enumerateDevices()
  .then(gotDevices)
  .then(getStream)
  .catch(handleError);

audioSelect.onchange = getStream;
videoSelect.onchange = getStream;

function gotDevices(deviceInfos) {
  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i];
    const option = document.createElement("option");
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === "audioinput") {
      option.text =
        deviceInfo.label || "microphone " + (audioSelect.length + 1);
      audioSelect.appendChild(option);
    } else if (deviceInfo.kind === "videoinput") {
      option.text = deviceInfo.label || "camera " + (videoSelect.length + 1);
      videoSelect.appendChild(option);
    } else {
      console.log("Found another kind of device: ", deviceInfo);
    }
  }
}

function getStream() {
  if (window.stream) {
    window.stream.getTracks().forEach(function (track) {
      track.stop();
    });
  }

  const constraints = {
    audio: {
      deviceId: { exact: audioSelect.value },
    },
    video: {
      deviceId: { exact: videoSelect.value },
    },
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(gotStream)
    .catch(handleError);
}

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;
}

function handleError(error) {
  console.error("Error: ", error);
}
} else {
  alert("getUserMedia() is not supported by your browser");
}
  
  
</script>
