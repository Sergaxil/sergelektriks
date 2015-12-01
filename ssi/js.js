window.onload=function() {
var reclame = document.getElementById("reclame")
function reclameTrigger() {
if(reclame.style.display === 'block') {
reclame.style.display = 'none'
} else {
reclame.style.display = 'block'
}
}
setInterval(reclameTrigger, 3000)
} 