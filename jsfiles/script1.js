function func(vara,varb)
{
var d = document.getElementById(varb);
var b = document.getElementById(vara);
var c = document.getElementById(vara).paused;
if(c == true){
b.play();
d.style.borderTop = "Solid white 4px";
d.style.borderBottom = "Solid white 8px";
}
else{b.pause();
d.style.border = "none";
}
}