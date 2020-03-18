document.addEventListener("DOMContentLoaded", function() { 
var visits = document.getElementById("visitTime");

var stor = localStorage.getItem("v")

if(stor != null){
    stor = "" + (parseInt(stor)+1)
    localStorage.setItem("v",stor);
    visits.innerText = stor;
}
else{
    stor = "1";
    localStorage.setItem("v",stor);
    visits.innerText = stor;
}

setInterval(function (){
    var click = document.getElementById("tick");
    click.play();
},1000);


});


document.addEventListener("DOMContentLoaded", function() { 
    var elem = document.getElementById("text");
    var doc = document.getElementById("div1");

    var pep = document.getElementById("pep");
    var hoh = document.getElementById("hoh");
    setInterval(function change(){
        var date = new Date();
        
        var sec     =   "" + date.getSeconds();
        var min     =   "" + date.getMinutes();
        var hours   =   "" + date.getHours();

        if(sec == 0)
            pep.play();
        if(min == 0)
            hoh.play();
        if(sec < 10)
            sec = "0" + sec;
        if(hours < 10)
            hours = "0" + hours;
        if(min < 10)
            min = "0" + min;

        var time = "#" + hours + min + sec;
        var write = hours + ":" + min + ":" + sec;
        elem.innerHTML = write;
        doc.style.backgroundColor = time;
    },1000);

});

//document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener("DOMContentLoaded", function() { 
    var elem = document.getElementById("h"); 
    var doc = document.getElementById("div2");

    setInterval(function change(){
        var date = new Date();
        
        var hours   =   "" + date.getHours();
        var sec     =   "" + date.getSeconds();
        var min     =   "" + date.getMinutes();
        var milli   =   "" + date.getMilliseconds();

        setTimeout(function(){},35);

        if(sec < 10)
            sec = "0" + sec;
        if(milli < 10)
            milli = "0" + milli;
        milli = milli.substring(0,2); 
        if(min < 10)
            min = "0" + min;
        if(hours < 10)
            hours = "0" + hours;

        var write = hours + ":" + min + ":" + sec + ":" + milli;
        var time = "#" +hours + min + sec + milli;
        elem.innerHTML = write;
        doc.style.backgroundColor = time;
    },20);


});
