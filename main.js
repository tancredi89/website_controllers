function showMenu() {
    if (document.querySelector('.menu').style.visibility == "visible") {
        (document.querySelector('.menu').style.visibility = "hidden");
    } else { 
        (document.querySelector('.menu').style.visibility = "visible");

    }
};



function showMetop() {
    if (document.querySelector('.fullMetop').style.visibility == "visible") {
        (document.querySelector('.fullMetop').style.visibility = "hidden");
    } else { 
        (document.querySelector('.fullMetop').style.visibility = "visible");

    }
};


function displayTime() {
    var day = new Date();
    var s = day.getSeconds();
    var m = day.getMinutes();
    var h = day.getHours();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var stringTime = "UTC  "+ (h-2) + ":" + m + ":" + s;
    
    document.getElementById("time").innerText = stringTime;
    document.getElementById("time").textContent = stringTime;
    
    setTimeout(displayTime, 1000);
}
displayTime();

function soundChange() {
    var soundText = document.getElementById('sound').innerHTML;
    
    if (soundText == "SOUND OFF") {
        var audio = document.getElementById('soundOff')
        document.getElementById('sound').innerHTML = 'SOUND ON';
    } else {
        document.getElementById('sound').innerHTML = 'SOUND OFF';
        var audio = document.getElementById('soundOn');
    }
    audio.play();
};