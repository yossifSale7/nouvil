let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain1 = document.getElementById("mountain1");
let mountain2 = document.getElementById("mountain2");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvil = document.querySelector(".nouvil");

window.onscroll = function() {
   let value = scrollY;
   stars.style.left = value * 3.5 + "px";
   moon.style.top = value * 3 + "px";
   mountain1.style.top = value * 1.5 + "px";
   mountain2.style.top = value * 1.5 + "px";
   river.style.top = value * 1.5 + "px";
   boat.style.top = value * 1.5 + "px";
   boat.style.left = value * 1.5 + "px";
   nouvil.style.fontSize = value + "px";
   if(scrollY >= 67){
      nouvil.style.fontSize = 67 + "px";
      nouvil.style.position = "fixed";
      if(scrollY >= 426) {
         nouvil.style.display = "none";
      }else {
         nouvil.style.display = "block";
      }
      if(scrollY >= 127) {
         document.querySelector(".main").style.background = "linear-gradient(rgb(61, 122, 252), rgb(3, 9, 34))";
      }else {
         document.querySelector(".main").style.background = "linear-gradient(rgb(27, 0, 24), rgb(18, 0, 41))";
      }
   }
}