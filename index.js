var redPercent = document.getElementById("red-percent");
var greenPercent = document.getElementById("green-percent");
var bluePercent = document.getElementById("blue-percent");
[redPercent, greenPercent, bluePercent].forEach(function (percent) {
    percent.addEventListener("change", function (event) {
        console.log(event.target.value);
    });
});
