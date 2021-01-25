const sendMessageToPage = function (message) {
    return self.clients.matchAll().then(clients => {
        return Promise.all(clients.map(client => {
            return client.postMessage('(service worker message) ' + message);
        }));
    });
};


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
