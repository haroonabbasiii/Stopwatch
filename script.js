var hr = 00;
var min = 00;
var sec = 00;
var count = 00;
var timer = false;
var logIndex = 0;

function start() {
    if (timer == false) {
        timer = true;
        stopWatch();
        disableButton();

        document.getElementById("start").style.background = "#fb657f";
        document.getElementById("split").style.background = "#f29e26";
        document.getElementById("start").innerHTML = "Pause";
        document.getElementById("split").style.color = "white";
        document.getElementById("split").disabled = false;
    } else {
        timer = false;

        enableButton();
        pause();
        document.getElementById("start").style.background = "#18a69d";
        document.getElementById("split").style.background = "#f5f8fb";
        document.getElementById("split").style.color = "#AEAEAC";
        document.getElementById("start").innerHTML = "Start";
        document.getElementById("reset").style.color = "white";
        document.getElementById("split").disabled = true;
    }
}

function reset() {
    timer = false;

    document.getElementById("split-para").innerHTML = "";
    document.getElementById("reset").style.background = "#f5f8fb";
    document.getElementById("reset").style.color = "#AEAEAC";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("timer2").innerHTML = "Split time";

    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopWatch() {
    if (timer == true) {
        count = count + 1;

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;
        if (hr < 10) {
            hrString = "0" + hrString;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("timer2").innerHTML =
            hrString + ":" + minString + ":" + secString + ":" + countString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        setTimeout("stopWatch()", 10);
    }
}

function disableButton() {
    document.getElementById("reset").disabled = true;
}

function enableButton() {
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").style.background = "#4487d0";
}

function split() {
    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;
    if (hr < 10) {
        hrString = "0" + hrString;
    }
    if (min < 10) {
        minString = "0" + minString;
    }
    if (sec < 10) {
        secString = "0" + secString;
    }
    if (count < 10) {
        countString = "0" + countString;
    }
    logIndex++;
    var counting =
        hrString + ":" + minString + ":" + secString + ":" + countString;
    document.getElementById("split-para").innerHTML =
        document.getElementById("split-para").innerHTML +
        "<p>" +
        "#" +
        logIndex +
        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
        counting +
        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
        "Split";
    +"</p>";
}

function pause() {
    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;
    if (hr < 10) {
        hrString = "0" + hrString;
    }
    if (min < 10) {
        minString = "0" + minString;
    }
    if (sec < 10) {
        secString = "0" + secString;
    }
    if (count < 10) {
        countString = "0" + countString;
    }
    logIndex++;
    var counting =
        hrString + ":" + minString + ":" + secString + ":" + countString;
    document.getElementById("split-para").innerHTML =
        document.getElementById("split-para").innerHTML +
        "<p>" +
        "#" +
        logIndex +
        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
        counting +
        "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
        "Pause";
    +"</p>";
}
