function displayRandom(){
var addDiv = document.getElementById("square_container");
for (i = 1; i <= 100; i++) {
    var newDiv = document.createElement("div");
    newDiv.id = "square" + i;
    newDiv.className = "square";
    newDiv.style.position = "absolute";
    newDiv.style.left = Math.floor(Math.random() * 101) + "%";
    newDiv.style.top = Math.floor(Math.random() * 101) + "%";
    addDiv.appendChild(newDiv);
}
document.getElementById("square_container");
}
displayRandom();
