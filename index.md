<div id="dummy" style=" background-color:powderblue;text-align:center;height: 100%;width:100%;position:absolute;top:0;right:0;bottom:0;left:0;">-2,-2</div>

<script>
document.getElementById("dummy").addEventListener("touchstart", function (event) {
      var i;
  for (i=0; i < event.touches.length; i++) {
    console.log("touchpoint[" + i + "].screenX = " + event.touches[i].screenX);
    console.log("touchpoint[" + i + "].screenY = " + event.touches[i].screenY);
    document.getElementById("dummy").innerHTML = event.touches[i].screenX +","+ event.touches[i].screenY;
  }
});
document.getElementById("dummy").addEventListener("touchend", function (event) {
    document.getElementById("dummy").innerHTML = "-2,-2";
});
window.addEventListener("devicemotion", function(event) {

var touch = document.getElementById("dummy").innerHTML;
var ts = (new Date()).getTime() / 1000;

console.log(touchX, ",", touchY, "," ,"ACCEL,", ts, "," , event.accelerationIncludingGravity.x, "," , event.accelerationIncludingGravity.y , "," , event.accelerationIncludingGravity.z);
console.log(touchX, ",", touchY, "," ,"GYRO,", ts, "," , event.rotationRate.alpha , "," , event.rotationRate.beta , "," , event.rotationRate.gamma);

}, true);
</script>
