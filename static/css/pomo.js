
var countDownDate = new Date().getTime() + 1500000;
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
 
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Take a Break";
  }
if(distance <= 0){
alert("Pomodoro Completed");
}
}, 1000);

function refreshPage(){
    window.location.reload();
} 

