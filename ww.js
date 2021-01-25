
console.log("OTI NA NAI web worker");
x=Math.log(5);
console.log(x);
 
window.addEventListener('deviceorientation', event => {
  var x = event.beta;  // In degree in the range [-180,180)
  var y = event.gamma; // In degree in the range [-90,90)
  console.log(x);
  console.log(y);
  });
