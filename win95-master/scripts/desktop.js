$(document).on("ready", function() {

    $("#recycleIcon").draggable({ grid: [80, 80], containment: "#desktop", scroll: false   });
    $("#networkIcon").draggable({ grid: [80, 80], containment: "#desktop", scroll: false   });
    $("#windowsIcon").draggable({ grid: [80, 80] });

    $("#computIcon").draggable({ grid: [80, 80]});
   document.getElementById("desktop-clock").innerText = getTime();
});

setInterval(function(){

   document.getElementById("desktop-clock").innerText = getTime();
}, 10000);

function getTime(){

    var localTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    return localTime;
}