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
    var h = day.getHours()-2;
    var metopAAos = "22:03:46";
    var metopBAos = "10:04:10";
    var metopCAos = "04:58:26";

    var metopA = timerCountdown(metopAAos)[0];
    var metopB = timerCountdown(metopBAos)[0];
    var metopC = timerCountdown(metopCAos)[0];

    var deltaA = timerCountdown(metopAAos)[1];
    var deltaB = timerCountdown(metopBAos)[1];
    var deltaC = timerCountdown(metopCAos)[1];

    if (deltaA>deltaB && deltaB>deltaC) {
        console.log("CBA");
        document.getElementById("metopc").style.zIndex = "3";
        document.getElementById("metopc").style.top = "150px";
        document.getElementById("metopc").style.left = "150px";
        document.getElementById("metopb").style.zIndex = "2";
        document.getElementById("metopb").style.top = "100px";
        document.getElementById("metopb").style.left = "100px";
        document.getElementById("metopa").style.zIndex = "1";
        document.getElementById("metopa").style.top = "50px";
        document.getElementById("metopa").style.left = "50px";

        document.getElementById("fullmetopc").style.gridRow = "2 / span 1"
        document.getElementById("fullmetopc").style.gridColumn = "2 / span 1"
        document.getElementById("fullmetopb").style.gridRow = "4 / span 1"
        document.getElementById("fullmetopb").style.gridColumn = "3 / span 1"
        document.getElementById("fullmetopa").style.gridRow = "4 / span 1"
        document.getElementById("fullmetopa").style.gridColumn = "1 / span 1"

    } else if (deltaC>deltaA && deltaA>deltaB) {
        console.log("BAC");
        document.getElementById("metopb").style.zIndex = "3";
        document.getElementById("metopb").style.top = "150px";
        document.getElementById("metopb").style.left = "150px";
        document.getElementById("metopa").style.zIndex = "2";
        document.getElementById("metopa").style.top = "100px";
        document.getElementById("metopa").style.left = "100px";
        document.getElementById("metopc").style.zIndex = "1";
        document.getElementById("metopc").style.top = "50px";
        document.getElementById("metopc").style.left = "50px";

        document.getElementById("fullmetopb").style.gridRow = "2 / span 1"
        document.getElementById("fullmetopb").style.gridColumn = "2 / span 1"
        document.getElementById("fullmetopa").style.gridRow = "4 / span 1"
        document.getElementById("fullmetopa").style.gridColumn = "3 / span 1"
        document.getElementById("fullmetopc").style.gridRow = "4 / span 1"
        document.getElementById("fullmetopc").style.gridColumn = "1 / span 1"
    } else if (deltaB>deltaC && deltaC>deltaA) {
        console.log("ACB");
        document.getElementById("metopb").style.zIndex = "1";
        document.getElementById("metopb").style.top = "50px";
        document.getElementById("metopb").style.left = "50px";
        document.getElementById("metopa").style.zIndex = "3";
        document.getElementById("metopa").style.top = "150px";
        document.getElementById("metopa").style.left = "150px";
        document.getElementById("metopc").style.zIndex = "2";
        document.getElementById("metopc").style.top = "100px";
        document.getElementById("metopc").style.left = "100px";

        document.getElementById("fullmetopa").style.gridRow = "2 / span 1"
        document.getElementById("fullmetopa").style.gridColumn = "2 / span 1"
        document.getElementById("fullmetopc").style.gridRow = "4 / span 1"
        document.getElementById("fullmetopc").style.gridColumn = "3 / span 1"
        document.getElementById("fullmetopb").style.gridRow = "4 / span 1"
        document.getElementById("fullmetopb").style.gridColumn = "1 / span 1"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var stringTime = "UTC  "+ h + ":" + m + ":" + s;
    
    document.getElementById("time").textContent = stringTime;
    document.getElementById("metopa-cntdwn").textContent = "- "+metopA;
    document.getElementById("metopb-cntdwn").textContent = "- "+metopB;
    document.getElementById("metopc-cntdwn").textContent = "- "+metopC;
    document.getElementById("fullmetopa-cntdwn").textContent = "- "+metopA;
    document.getElementById("fullmetopb-cntdwn").textContent = "- "+metopB;
    document.getElementById("fullmetopc-cntdwn").textContent = "- "+metopC;

    var soundPlayed = false

    if (deltaA<60){
        var audio = document.getElementById('1minwarning')
        if (soundPlayed==false){
            audio.play();
            soundPlayed=true;
        }
    }
    if (deltaB<60){
        var audio = document.getElementById('1minwarning')
        if (soundPlayed==false){
            audio.play();
            soundPlayed=true;
        }
    }
    if (deltaC<60){
        var audio = document.getElementById('1minwarning')
        if (soundPlayed==false){
            audio.play();
            soundPlayed=true;
        }    
    }


    setTimeout(displayTime, 1000);
};
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

function timerCountdown(time) {
    var parsedTime = time.split(":");
    var s = parsedTime[2];
    var m = parsedTime[1];
    var h = parsedTime[0];
    var now = new Date();
    var hours = now.getHours()-2;

    if (s < now.getSeconds()) {
        var sdown = (parseInt(s)+60)-now.getSeconds();
    } else {
        var sdown = s-now.getSeconds();    
    }

    if (m < now.getMinutes()) {
        var mdown = (parseInt(m)+60)-now.getMinutes();
    } else {
        var mdown = m-now.getMinutes();    
    }

    if (h < hours) {
        var hdown = (parseInt(h)+24)-hours;
    } else {
        var hdown = h-hours;    
    }

    var delta = hdown*3600+mdown*60+sdown;

    if (hdown < 10) {
        hdown = "0"+hdown;
    }
    if (mdown < 10) {
        mdown = "0"+mdown;
    }
    if (sdown < 10) {
        sdown = "0"+sdown;
    }

    

    return ([hdown+":"+mdown+":"+sdown,delta])
}