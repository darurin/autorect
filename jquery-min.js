function drawRectangle() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var x = $("#xCoordinate").val();
    var y = $("#yCoordinate").val();
    var width = $("#numWidth").val();
    var height = $("#numHeight").val();
    var drawMode = $("#drawMode").val();
    var color = $("#color").val();
    var strokeWidth = $("#strokeWidth").val();

    context.strokeStyle = color;
    context.lineWidth = strokeWidth;
    context.fillStyle = color;

    if (drawMode === "fill") {
        context.fillRect(x, y, width, height);
    } else if (drawMode === "stroke") {
        context.strokeRect(x, y, width, height);
    }

    var numberInputs = document.querySelectorAll("input[type='number']");

    numberInputs.forEach(function(input) {
        input.value = "";
    });

}

function clearRectangle() {
    var numberInputs = document.querySelectorAll("input[type='number']");

    numberInputs.forEach(function(input) {
        input.value = "";
    });

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}