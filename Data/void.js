var boton = document.getElementById("evento");
var tex = document.getElementById("texto")
var count = 0;

boton.onclick = function (){
    count++;
    tex.innerHTML = count;
}