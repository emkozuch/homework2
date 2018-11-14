function clockDisplay() {
    var currentTime = new Date();
    var hour = currentTime.getUTCHours() + 1;
    var minutes = currentTime.getUTCMinutes();
    var seconds = currentTime.getUTCSeconds();

    if (hour === 24) {
        document.getElementById("hour_tens").innerHTML = "0";
        document.getElementById("hour_units").innerHTML = "0";
    } else {
        document.getElementById("hour_tens").innerHTML = Math.floor(hour / 10);
        document.getElementById("hour_units").innerHTML = hour % 10;
    }

    document.getElementById("minutes_tens").innerHTML = Math.floor(minutes / 10);
    document.getElementById("minutes_units").innerHTML = minutes % 10;
    document.getElementById("seconds_tens").innerHTML = Math.floor(seconds / 10);
    document.getElementById("seconds_units").innerHTML = seconds % 10;
}
setInterval(clockDisplay, 0);




