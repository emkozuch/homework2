var date = new Date(),
    message = "Hello! Today is ",
    day = date.getUTCDate(),
    month = date.getUTCMonth() + 1,
    year = date.getUTCFullYear(),
    hour = date.getUTCHours() + 1,
    minutes = date.getUTCMinutes();

if (month < 10) {
    month = "0" + month;
}

if (day < 10) {
day = "0" + day;
}
 
if (minutes < 10) {
    minutes = "0" + minutes;
}

var helloString = message + day + "." + month + "." + year + " " + hour + ":" + minutes;

console.log(helloString);

document.getElementById("hello").innerHTML = helloString;