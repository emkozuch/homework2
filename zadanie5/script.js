function addDiv() {
    var addDiv = document.getElementById("square_container");
    var newDiv = document.createElement("div");
    newDiv.id = "square";
    newDiv.className = "square";
    newDiv.style.position = "absolute";
    newDiv.style.left = Math.floor(Math.random() * 101) + "%";
    newDiv.style.top = Math.floor(Math.random() * 101) + "%";
    addDiv.appendChild(newDiv);
}

function displayRandom() {
    for (i = 1; i <= 100; i++) {
        setTimeout(addDiv, i * 1000);
    }
}
displayRandom();