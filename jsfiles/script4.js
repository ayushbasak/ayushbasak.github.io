window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var abcd = document.getElementById("fixeddd");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   document.getElementById("pluto").style.fontSize = "30px";
  } else {
	  document.getElementById("pluto").style.fontSize = "50px";
  }
}