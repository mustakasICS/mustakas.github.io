<div id="dummy" style=" background-color:powderblue;text-align:center;height: 100%;width:100%;position:absolute;top:0;right:0;bottom:0;left:0;">-2,-2</div>

<script>
document.getElementById("dummy").addEventListener("touchstart", function (event) {
      var i;
  for (i=0; i < event.touches.length; i++) {
    //console.log("touchpoint[" + i + "].screenX = " + event.touches[i].screenX);
    //console.log("touchpoint[" + i + "].screenY = " + event.touches[i].screenY);
    var x=event.touches[i].screenX*2.75;
    var y=event.touches[i].screenY*2.75;
    document.getElementById("dummy").innerHTML = x +","+ y;
  }
});
document.getElementById("dummy").addEventListener("touchend", function (event) {
    document.getElementById("dummy").innerHTML = "-2,-2";
});
window.addEventListener("devicemotion", function(event) {

var touch = document.getElementById("dummy").innerHTML;
var ts = (new Date()).getTime() / 1000;

console.log(touch, "," ,"ACCEL,", ts, "," , event.acceleration.x/9.81, "," , event.acceleration.y/9.81 , "," , event.acceleration.z/9.81);
console.log(touch, "," ,"GYRO,", ts, "," , parseFloat(event.rotationRate.alpha) , "," , parseFloat(event.rotationRate.beta) , "," , parseFloat(event.rotationRate.gamma));
}, false);

</script>
