var counter = 1;
var start = "";
var end = "";
var totalWaktu = "";

if (localStorage.getItem("topScore") !== null) {
    var topScore = localStorage.getItem("topScore");
    document.getElementById("topScore"). innerHTML = topScore + "s";
}

tampilkanGambar();
function tampilkanGambar() {
    const top = Math.random() * 400;
    const left = Math.random() * 300;

    start = new Date().getTime();

    document.getElementById("bird").src = "bird.png";
    document.getElementById("bird").style.height = 60 + "px";
    document.getElementById("bird").style.width = 60 + "px";
    document.getElementById("bird").style.top = top + "px";
    document.getElementById("bird").style.left = left + "px";
    document.getElementById("bird").style.position = "relative";
    document.getElementById("bird").style.display = "block";
}

document.getElementById("bird").onclick = function() {
    document.getElementById("bird").src = "bom.png";
    document.getElementById("bird").style.height = 120 + "px";
    document.getElementById("bird").style.width = 120 + "px";
    setTimeout(sembunyikanGambar, 500);
    
    if (counter < 5) {
        setTimeout(tampilkanGambar, 600);
        counter++;
    } else {
        setTimeout(function() { alert("Selesai"); }, 100);
        end = new Date(). getTime();
        totalWaktu = (end - start) / 100;
        document.getElementById("totalWaktu"). innerHTML = totalWaktu + "s";
        setTopscore();
    }
}

function sembunyikanGambar() {
    document.getElementById("bird").style.display = "none";
}

function setTopscore() {
    if (localStorage.getItem("topScore") == null) {
        localStorage.setItem("topScore",totalWaktu);
        document.getElementById("topScore"). innerHTML = totalWaktu + "s";
    } else if (totalWaktu < topScore) {
        localStorage.setItem("topScore",totalWaktu);
        document.getElementById("topScore"). innerHTML = totalWaktu + "s";
    } else {

    }
}