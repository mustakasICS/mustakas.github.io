function handleOrientation(event) {
    var x = event.beta;  // In degree in the range [-180,180)
    var y = event.gamma; // In degree in the range [-90,90)
    console.log(x);
    console.log(y);
  }
self.addEventListener('deviceorientation', handleOrientation);

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);
});
console.log("OTI NA NAI");

clients.matchAll({
       type: 'window',
       includeUncontrolled: true
    })
    .then(function(windowClients) {

     var clientIsVisible = false;

     for (var i = 0; i < windowClients.length; i++) {
      const windowClient = windowClients[i];
      windowClient.addEventListener('deviceorientation', function (event) {
        var x = event.beta;  // In degree in the range [-180,180)
        var y = event.gamma; // In degree in the range [-90,90)
        console.log(x);
        console.log(y)
      });
      if (windowClient.visibilityState==="visible") {
          clientIsVisible = true;
    
        break;
      }
    }

    return clientIsVisible;
  });
