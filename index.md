<div id="dummy" style=" background-color:powderblue;text-align:center;height: 100%;width:100%;">-2,-2</div>

<script>
document.getElementById("dummy").addEventListener("touchstart", function (event) {
      var i;
  for (i=0; i < e.touches.length; i++) {
    console.log("touchpoint[" + i + "].screenX = " + e.touches[i].screenX);
    console.log("touchpoint[" + i + "].screenY = " + e.touches[i].screenY);
  }
});
window.addEventListener("devicemotion", function(event) {

var touchX = -2;
var touchY = -2;
var ts = (new Date()).getTime() / 1000
console.log(touchX, ",", touchY, "," ,"ACCEL,", ts, "," , event.accelerationIncludingGravity.x, "," , event.accelerationIncludingGravity.y , "," , event.accelerationIncludingGravity.z);
console.log(touchX, ",", touchY, "," ,"GYRO,", ts, "," , event.rotationRate.alpha , "," , event.rotationRate.beta , "," , event.rotationRate.gamma);

}, true);
</script>
