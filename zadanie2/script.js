var array = [1, 14, 15, -31, 5, 6, 129, 9, -21, 55];
// var min = "smallest number is " + Math.min.apply(null ,array);
// var max = "biggest number is " + Math.max.apply(null ,array);

// console.log(min);
// console.log(max);


var min = (array[0]);
var max = (array[0]);
for (var i = 0; i < array.length; i++) {
    if (array[i] >= max) {
        max = array[i];
    }
}
for (var i = 0; i < array.length; i++) {
    if (array[i] <= min) {
        min = array[i];
    }
}

console.log("smallest number is " + min);
console.log("biggest number is " + max);