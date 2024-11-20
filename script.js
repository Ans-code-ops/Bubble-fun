var tim = 60;
var score = 0;
var rnhit = 0;

function newsor(){
   score += 10;
   document.querySelector("#scoreval").textContent = score
}
function getnewhit(){
    rnhit = Math.floor(Math.random() *10);
   document.querySelector("#hitval").textContent = rnhit;
}
function makebbl(){
var  clutter =  " ";

for(var i=1; i<=128; i++) {
   var rn = Math.floor(Math.random() *10)
   clutter +=   `<div class="bbl">${rn}</div>`;
   

}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runtim(){
   var time = setInterval(function(){
      if(tim >0){
         tim --;
         document.querySelector("#timing").textContent = tim;
      }else{
         clearInterval(time);
         document.querySelector("#pbtm").innerHTML = `<h1>Game Over`;
      }
      
   },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clicknm = Number(dets.target.textContent);
   if(clicknm === rnhit ){
      newsor();
      makebbl();
      getnewhit();
   }
})
makebbl()
runtim();
getnewhit();