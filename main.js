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
    var s = parseInt(day.getSeconds());
    var m = parseInt(day.getMinutes());
    var h = Math.abs(parseInt(day.getHours())-1);
    if (day.getHours()==0) {
        h = 23
    }
    var data = parseInt(day.getDate());
    var mese = parseInt(day.getMonth());
    var DOY = dayOfYear(data,mese);

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var stringTime = "UTC  "+ h + ":" + m + ":" + s;
    
    document.getElementById("time").textContent = stringTime;
    setTimeout(displayTime, 1000);
};
displayTime();

function populateTimers() {
    var metopAAos = "298:13:28:46";
    var metopBAos = "299:10:04:10";
    var metopCAos = "300:13:18:26";

    var metopA = timerCountdown(metopAAos)[0];
    var metopB = timerCountdown(metopBAos)[0];
    var metopC = timerCountdown(metopCAos)[0];

    var deltaA = timerCountdown(metopAAos)[1];
    var deltaB = timerCountdown(metopBAos)[1];
    var deltaC = timerCountdown(metopCAos)[1];

    if (deltaA>deltaB && deltaB>deltaC) {
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

    document.getElementById("metopa-cntdwn").textContent = metopA;
    document.getElementById("metopb-cntdwn").textContent = metopB;
    document.getElementById("metopc-cntdwn").textContent = metopC;
    document.getElementById("m02aos").textContent = "AOS "+metopAAos.slice(4,12);
    document.getElementById("m01aos").textContent = "AOS "+metopBAos.slice(4,12);
    document.getElementById("m03aos").textContent = "AOS "+metopCAos.slice(4,12);

    document.getElementById("fullmetopa-cntdwn").textContent = metopA;
    document.getElementById("fullmetopb-cntdwn").textContent = metopB;
    document.getElementById("fullmetopc-cntdwn").textContent = metopC;
    document.getElementById("fullmetopa-cntdwn").textContent = metopA;
    document.getElementById("fullmetopb-cntdwn").textContent = metopB;
    document.getElementById("fullmetopc-cntdwn").textContent = metopC;
    setTimeout(populateTimers,1000);
}
populateTimers();

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

function dayOfYear(day,mese) {
    var months = [31,28,31,30,31,30,31,31,30,31,30,31];
    var DOY = 0;
    for (var m = 0; m <= mese;m++ ) {
        if (m == mese-1) {
            DOY +=day
        } else {
            DOY += months[m];
        }
    }
    return DOY
}


//Missing day as a part of the countdown
function timerCountdown(time) {
    var parsedTime = time.split(":");
    var s = parseInt(parsedTime[3]);
    var m = parseInt(parsedTime[2]);
    var h = parseInt(parsedTime[1]);
    var metopDOY = parseInt(parsedTime[0]);
    var now = new Date();
    var todayDate = parseInt(now.getDate());
    var todayMonth = parseInt(now.getMonth());
    var todayDOY = dayOfYear(todayDate,todayMonth);
    var hours = parseInt(now.getHours())-1;
    var mdown = m - parseInt(now.getMinutes());
    if (todayDOY==metopDOY) {
        var hdown = Math.abs(h - hours);
    } else {
        var hdown = (todayDOY-metopDOY)*24+h - hours
    }

    if (mdown<0) {
        mdown += 60;
    } 

    if (s < now.getSeconds()) {
        var sdown = (parseInt(s)+60)-now.getSeconds();
    } else {
        var sdown = s-now.getSeconds();    
    }

    if (s==now.getSeconds()) {
        mdown -= 1; 
    }

    if (m==now.getMinutes()) {
        hdown -= 1;
    }

    var delta = Math.abs(hdown)*3600+Math.abs(mdown)*60+Math.abs(sdown);

    if (hdown < 10 && hdown > -10) {
        hdown = "0"+hdown;
    }
    if (mdown < 10 && mdown > -10) {
        mdown = "0"+mdown;
    }
    if (sdown < 10 && sdown > -10) {
        sdown = "0"+sdown;
    }

    

    return ([hdown+":"+mdown+":"+sdown,delta])
}