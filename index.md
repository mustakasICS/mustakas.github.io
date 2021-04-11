<div id="dummy" style=" background-color:powderblue;text-align:center;height: 100%;width:100%;position:absolute;top:0;right:0;bottom:0;left:0;">-2,-2</div>

<script>
document.getElementById("dummy").addEventListener("touchstart", function (event) {
      var i;
  for (i=0; i < event.touches.length; i++) {
    console.log("touchpoint[" + i + "].screenX = " + event.touches[i].screenX);
    console.log("touchpoint[" + i + "].screenY = " + event.touches[i].screenY);
    console.log("touchpoint[" + i + "].pageX = " + event.touches[i].pageX);
    console.log("touchpoint[" + i + "].pageY = " + event.touches[i].pageY);
    console.log("touchpoint[" + i + "].clientX = " + event.touches[i].clientX);
    console.log("touchpoint[" + i + "].clientY = " + event.touches[i].clientY);
    document.getElementById("dummy").innerHTML = event.touches[i].pageX +","+ event.touches[i].pageY;
  }
});
document.getElementById("dummy").addEventListener("touchend", function (event) {
    document.getElementById("dummy").innerHTML = "-2,-2";
});
window.addEventListener("devicemotion", function(event) {

var touch = document.getElementById("dummy").innerHTML;
var ts = (new Date()).getTime() / 1000;

//console.log(touch, "," ,"ACCEL,", ts, "," , event.accelerationIncludingGravity.x, "," , event.accelerationIncludingGravity.y , "," , event.accelerationIncludingGravity.z);
//console.log(touch, "," ,"GYRO,", ts, "," , event.rotationRate.alpha , "," , event.rotationRate.beta , "," , event.rotationRate.gamma);

}, true);
</script>
