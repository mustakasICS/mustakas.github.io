<div id="dummy" style="color:blue;text-align:center;height: 200px;width: 500px;"></div>

<script>
document.getElementById("dummy").addEventListener("touchstart", function (event) {
    document.getElementById("dummy").innerHTML = event.page.X + "," + event.page.Y;
});
window.addEventListener("devicemotion", function(event) {

var touchX = -2;
var touchY = -2;
var ts = (new Date()).getTime() / 1000
console.log(touchX, ",", touchY, "," ,"ACCEL,", ts, "," , event.accelerationIncludingGravity.x, "," , event.accelerationIncludingGravity.y , "," , event.accelerationIncludingGravity.z);
console.log(touchX, ",", touchY, "," ,"GYRO,", ts, "," , event.rotationRate.alpha , "," , event.rotationRate.beta , "," , event.rotationRate.gamma);

}, true);
</script>
