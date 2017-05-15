$(document).on("ready", function () {

    $("#recycleIcon").draggable({ grid: [80, 80], containment: "window", scroll: false });
    $("#networkIcon").draggable({ grid: [80, 80], containment: "window", scroll: false });

    $("#pop-up-win").draggable({ grid: [80, 80], containment: "window", scroll: false, cancel: ".inner-pop-up" });

    $("#pop-up-win").resizable({
        helper: "ui-resizable-helper",
        maxHeight: 450,
        maxWidth: 450,
        minHeight: 250,
        minWidth: 300
    });

    document.getElementById("desktop-clock").innerText = getTime();
});

setInterval(function () {

    document.getElementById("desktop-clock").innerText = getTime();
}, 10000);

function getTime() {

    var localTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return localTime;
}