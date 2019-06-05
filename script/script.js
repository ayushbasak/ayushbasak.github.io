window.onscroll = function()
 { scrollFunction()
};


function scrollFunction() {
	var x = document.getElementById("top");
	var goTOPbutton = document.getElementById("goTOP");
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    x.style.fontSize = "20px";
	x.style.padding = "5px";
	goTOPbutton.style.display = "block";
  } else {
    x.style.fontSize = "30px";
	goTOPbutton.style.display = "none";
	x.style.padding = "10px";
  }

}



