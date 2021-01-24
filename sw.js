console.log("OTI NA NAI");
function handleOrientation(event) {
    var x = event.beta;  // In degree in the range [-180,180)
    var y = event.gamma; // In degree in the range [-90,90)
    console.log(x);
    console.log(y);
  }
self.addEventListener('deviceorientation', handleOrientation);

self.addEventListener('fetch', function (event) {
  function handleOrientation(event) {
    var x = event.beta;  // In degree in the range [-180,180)
    var y = event.gamma; // In degree in the range [-90,90)
    console.log(x);
    console.log(y);
  }
  window.addEventListener('deviceorientation', handleOrientation);
  console.log(event.request.url);
});
